  var color = 0;
  var color2 = 255;
  var faces = true;
  function render(objects, ctx, dx, dy) {

    // Clear the previous frame
    ctx.clearRect(0, 0, 2*dx, 2*dy);

    // For each object
    for (var i = 0; i < Triangles.length; ++i) {
        // For each face
        for (var j = 0; j < Triangles[i].faces.length; ++j) {
          if(Triangles[i].vertices[j].y > 90 && Triangles[i].vertices[j].y < 100000)
          {

      // Current face
      var face = Triangles[i].faces[0];


      // Draw the first vertex
      var P = project(face[0]);
      ctx.beginPath();
      ctx.moveTo(P.x + dx, -P.y + dy);

      // Draw the other vertices
      for (var k = 1; k < 4; ++k) {
        P = project(face[k]);
        ctx.lineTo(P.x + dx, -P.y + dy);
      }

      // Close the path and draw the face
      ctx.closePath();


      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.stroke();
      if(Triangles[i].vertices[j].y > 100 && Triangles[i].vertices[j].y < 400)
      {
        //ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      }
      else
      {
        // ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillStyle = 'green';
      }

      ctx.fill();
    }


  }
}


if(faces == true)
{
       // For each object
       for (var i = 0, n_obj = objects.length; i < n_obj; ++i) {

           // For each face
           for (var j = 0, n_faces = objects[i].faces.length; j < n_faces; ++j) {
             if(objects[i].vertices[j].y > 90 &&  objects[i].vertices[j].y < 10000)
                //
              {
               // Current face
               var face = objects[i].faces[j];

               // Draw the first vertex
               var P = project(face[0]);
               ctx.beginPath();
               ctx.moveTo(P.x + dx, -P.y + dy);

               // Draw the other vertices
               for (var k = 1, n_vertices = face.length; k < n_vertices; ++k) {
                 P = project(face[k]);
                 ctx.lineTo(P.x + dx, -P.y + dy);
               }

               // Close the path and draw the face
               ctx.closePath();


               ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
               ctx.stroke();
               //ctx.fillStyle = 'rgba(100, ' + color2 + ', ' + color + ', 0.3)';
               ctx.fillStyle = 'rgba(100, 100,100, 0.3)';
               //ctx.fillStyle = 'rgba(' + color2 + ',100,100,0.3)';
               //ctx.fillStyle = 'rgba(' + color2 + ',100,100,0.3)';
               ctx.fill();
             }


           }

           color += 1;

           color2 -= 1;


         } 
       }
       else
       {
            // For each object
            for (var i = 0, n_obj = objects.length; i < n_obj; ++i) {
                // For each face
                for (var j = 0, n_faces = objects[i].vertices.length; j < n_faces; ++j) {

                  if(objects[i].vertices[j].y > 90  &&  objects[i].vertices[j].y < 2000)
                  {
                    var P = project(objects[i].vertices[j]);
                    ctx.beginPath();
                    ctx.arc(P.x + dx,-P.y + dy,1,0,2*Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = "green";
                    ctx.fill();
                  }
                }
              }
            }
            color = 0;
            color2 = 255;

        // For each object
        for (var i = 0, n_obj = Particles.length; i < n_obj; ++i) {
            // For each face
            for (var j = 0, n_faces = Particles[i].vertices.length; j < n_faces; ++j) {

             // if(Particles[i].vertices[j].y > 90  &&  Particles[i].vertices[j].y < 1000)
             // {
                var P = project(Particles[i].vertices[j]);
                ctx.drawImage(grass,P.x + dx,-P.y + dy , 100, 100);
                ctx.beginPath();
                //ctx.arc(P.x + dx,-P.y + dy,2,0,2*Math.PI);
                    //ctx.stroke();
                    ctx.fillStyle = 'rgba(' + color2 + ',100,100,0.3)';
                    //ctx.fillStyle = 'rgba(255,255,255,0.5)';
                    ctx.fill();
                 // }
                  color += 1;

                  color2 -= 1;
                }
              }
              color = 0;
              color2 = 255;
            }

            
            function setImage(){

              var now = Date.now();
              var delta = now-then;

              update(delta/1000);


              then = now;

              if(moveleft == true)
              {

                rotation -= Math.PI/90;
                for (var i = 0; i < objects.length; ++i)
                {
                  for (var j = 0; j < objects[i].vertices.length; ++j)
                  {
                    var p = objects[i].vertices[j];

                    rotateZ(p, rotation);

                  }
                }


                render(objects, ctx, dx, dy);

                rotation = 0;
              }

              if(moveright == true)
              {

                rotation += Math.PI/90;
                for (var i = 0; i < objects.length; ++i)
                {
                  for (var j = 0; j < objects[i].vertices.length; ++j)
                  {
                    var p = objects[i].vertices[j];

                    rotateZ(p, rotation);

                  }
                }


                render(objects, ctx, dx, dy);

                rotation = 0;
              }

              requestAnimationFrame(setImage);
            }

            var then = 0;

            var w = window;
            requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

            var keysDown = {};
            addEventListener("keydown", function(e){
              keysDown[e.keyCode] = true;
              e.preventDefault();
            }, false);
            addEventListener("keyup", function(e){
              delete keysDown[e.keyCode];
              e.preventDefault();
            }, false);
