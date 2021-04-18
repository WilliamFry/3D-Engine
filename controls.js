    function update(modifier){

      if(16 in keysDown){
        speed += 10;
      }
      else
      {
        speed = 10;
      }

     //up
     if(87 in keysDown){
      for (var i = 0; i < objects.length; ++i) 
      {
        for (var j = 0; j < objects[i].vertices.length; ++j) 
        {
          objects[i].vertices[j].y -= speed;
        }
      }

      for (var i = 0; i < Particles.length; ++i)
      {
        for (var j = 0; j < Particles[i].vertices.length; ++j)
        {   

          Particles[i].vertices[j].y -= speed;
        }
      }

      for (var i = 0; i < Triangles.length; ++i)
      {
        for (var j = 0; j < Triangles[i].vertices.length; ++j)
        {   

          Triangles[i].vertices[j].y -= speed;
        }
      }

      //cube_center.y -= speed;
      render(objects, ctx, dx, dy);
    }

     //down
     if(83 in keysDown){
      for (var i = 0; i < objects.length; ++i) 
      {
        for (var j = 0; j < objects[i].vertices.length; ++j) 
        {
          objects[i].vertices[j].y += speed;
        }
      }

      for (var i = 0; i < Particles.length; ++i)
      {
        for (var j = 0; j < Particles[i].vertices.length; ++j)
        {   

          Particles[i].vertices[j].y += speed;
        }
      }

      for (var i = 0; i < Triangles.length; ++i)
      {
        for (var j = 0; j < Triangles[i].vertices.length; ++j)
        {   

          Triangles[i].vertices[j].y += speed;
        }
      }

      //cube_center.y += speed;
      render(objects, ctx, dx, dy);
    }

     //left
     if(65 in keysDown){

      for (var i = 0; i < objects.length; ++i) 
      {
        for (var j = 0; j < objects[i].vertices.length; ++j) 
        {
          objects[i].vertices[j].x += speed;
        }
      }

      for (var i = 0; i < Particles.length; ++i)
      {
        for (var j = 0; j < Particles[i].vertices.length; ++j)
        {   

          Particles[i].vertices[j].x += speed;
        }
      }

      for (var i = 0; i < Triangles.length; ++i)
      {
        for (var j = 0; j < Triangles[i].vertices.length; ++j)
        {   

          Triangles[i].vertices[j].x += speed;
        }
      }

      //cube_center.x += speed;
      render(objects, ctx, dx, dy);
    }
     //right
     if(68 in keysDown){ 
      for (var i = 0; i < objects.length; ++i) 
      {
        for (var j = 0; j < objects[i].vertices.length; ++j) 
        {
          objects[i].vertices[j].x -= speed;

              //rotate(objects[i].vertices[j], cube_center, Math.PI / 90, -Math.PI / 90);
            }
          }

          for (var i = 0; i < Particles.length; ++i)
          {
            for (var j = 0; j < Particles[i].vertices.length; ++j)
            {   

              Particles[i].vertices[j].x -= speed;
            }
          }

          for (var i = 0; i < Triangles.length; ++i)
          {
            for (var j = 0; j < Triangles[i].vertices.length; ++j)
            {   

              Triangles[i].vertices[j].x -= speed;
            }
          }

      //cube_center.x -= speed;
      render(objects, ctx, dx, dy);
    } 


    if(39 in keysDown){ 
      rotation += Math.PI/90;
      for (var i = 0; i < objects.length; ++i)
      {
        for (var j = 0; j < objects[i].vertices.length; ++j)
        {
          var p = objects[i].vertices[j];

          rotateZ(p, rotation);

        }
      }

      for (var i = 0; i < Triangles.length; ++i)
      {
        for (var j = 0; j < Triangles[i].vertices.length; ++j)
        {
          var p = Triangles[i].vertices[j];

          rotateZ(p, rotation);

        }
      }

      for (var i = 0; i < Particles.length; ++i)
      {
        for (var j = 0; j < Particles[i].vertices.length; ++j)
        {   
          var p = Particles[i].vertices[j];

          rotateZ(p, rotation);
        }
      }


      render(objects, ctx, dx, dy);
      rotation = 0;
    }

    if(37 in keysDown){ 
      rotation -= Math.PI/90;
      for (var i = 0; i < objects.length; ++i)
      {
        for (var j = 0; j < objects[i].vertices.length; ++j)
        {
          var p = objects[i].vertices[j];

          rotateZ(p, rotation);

        }
      }

      for (var i = 0; i < Triangles.length; ++i)
      {
        for (var j = 0; j < Triangles[i].vertices.length; ++j)
        {
          var p = Triangles[i].vertices[j];

          rotateZ(p, rotation);

        }
      }

      for (var i = 0; i < Particles.length; ++i)
      {
        for (var j = 0; j < Particles[i].vertices.length; ++j)
        {   
          var p = Particles[i].vertices[j];

          rotateZ(p, rotation);
        }
      }


      render(objects, ctx, dx, dy);

      rotation = 0;
    }


    if(38 in keysDown){ 
      rotation -= Math.PI/90;
      for (var i = 0; i < objects.length; ++i)
      {
        for (var j = 0; j < objects[i].vertices.length; ++j)
        {
          var p = objects[i].vertices[j];

          rotateX(p, rotation);

        }
      }

      for (var i = 0; i < Triangles.length; ++i)
      {
        for (var j = 0; j < Triangles[i].vertices.length; ++j)
        {
          var p = Triangles[i].vertices[j];

          rotateX(p, rotation);

        }
      }

      for (var i = 0; i < Particles.length; ++i)
      {
        for (var j = 0; j < Particles[i].vertices.length; ++j)
        {   
          var p = Particles[i].vertices[j];

          rotateX(p, rotation);
        }
      }
      render(objects, ctx, dx, dy);
      rotation = 0;
    }

    if(40 in keysDown){ 
      rotation += Math.PI/90;
      for (var i = 0; i < objects.length; ++i)
      {
        for (var j = 0; j < objects[i].vertices.length; ++j)
        {
          var p = objects[i].vertices[j];

          rotateX(p, rotation);

        }
      }

      for (var i = 0; i < Triangles.length; ++i)
      {
        for (var j = 0; j < Triangles[i].vertices.length; ++j)
        {
          var p = Triangles[i].vertices[j];

          rotateX(p, rotation);

        }
      }

      for (var i = 0; i < Particles.length; ++i)
      {
        for (var j = 0; j < Particles[i].vertices.length; ++j)
        {   
          var p = Particles[i].vertices[j];

          rotateX(p, rotation);
        }
      }

      render(objects, ctx, dx, dy);

      rotation = 0;
    }

    if(32 in keysDown){ 

      if(faces == true)
      {
       faces = false; 

     }
     else{
      faces = true; 
    }


  }

}
                    function update(modifier){

                      if(16 in keysDown){
                        speed += 10;
                      }
                      else
                      {
                        speed = 10;
                      }

                     //up
                     if(87 in keysDown){
                      for (var i = 0; i < objects.length; ++i) 
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j) 
                        {
                          objects[i].vertices[j].y -= speed;
                        }
                      }

                      for (var i = 0; i < Particles.length; ++i)
                      {
                        for (var j = 0; j < Particles[i].vertices.length; ++j)
                        {   

                          Particles[i].vertices[j].y -= speed;
                        }
                      }

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {   

                          Triangles[i].vertices[j].y -= speed;
                        }
                      }

                      //cube_center.y -= speed;
                      render(objects, ctx, dx, dy);
                    }

                     //down
                     if(83 in keysDown){
                      for (var i = 0; i < objects.length; ++i) 
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j) 
                        {
                          objects[i].vertices[j].y += speed;
                        }
                      }

                      for (var i = 0; i < Particles.length; ++i)
                      {
                        for (var j = 0; j < Particles[i].vertices.length; ++j)
                        {   

                          Particles[i].vertices[j].y += speed;
                        }
                      }

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {   

                          Triangles[i].vertices[j].y += speed;
                        }
                      }

                      //cube_center.y += speed;
                      render(objects, ctx, dx, dy);
                    }

                     //left
                     if(65 in keysDown){

                      for (var i = 0; i < objects.length; ++i) 
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j) 
                        {
                          objects[i].vertices[j].x += speed;
                        }
                      }

                      for (var i = 0; i < Particles.length; ++i)
                      {
                        for (var j = 0; j < Particles[i].vertices.length; ++j)
                        {   

                          Particles[i].vertices[j].x += speed;
                        }
                      }

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {   

                          Triangles[i].vertices[j].x += speed;
                        }
                      }

                      //cube_center.x += speed;
                      render(objects, ctx, dx, dy);
                    }
                     //right
                     if(68 in keysDown){ 
                      for (var i = 0; i < objects.length; ++i) 
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j) 
                        {
                          objects[i].vertices[j].x -= speed;

                              //rotate(objects[i].vertices[j], cube_center, Math.PI / 90, -Math.PI / 90);
                            }
                          }

                          for (var i = 0; i < Particles.length; ++i)
                          {
                            for (var j = 0; j < Particles[i].vertices.length; ++j)
                            {   

                              Particles[i].vertices[j].x -= speed;
                            }
                          }

                          for (var i = 0; i < Triangles.length; ++i)
                          {
                            for (var j = 0; j < Triangles[i].vertices.length; ++j)
                            {   

                              Triangles[i].vertices[j].x -= speed;
                            }
                          }

                      //cube_center.x -= speed;
                      render(objects, ctx, dx, dy);
                    } 


                    if(39 in keysDown){ 
                      rotation += Math.PI/90;
                      for (var i = 0; i < objects.length; ++i)
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j)
                        {
                          var p = objects[i].vertices[j];

                          rotateZ(p, rotation);

                        }
                      }

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {
                          var p = Triangles[i].vertices[j];

                          rotateZ(p, rotation);

                        }
                      }

                      for (var i = 0; i < Particles.length; ++i)
                      {
                        for (var j = 0; j < Particles[i].vertices.length; ++j)
                        {   
                          var p = Particles[i].vertices[j];

                          rotateZ(p, rotation);
                        }
                      }


                      render(objects, ctx, dx, dy);
                      rotation = 0;
                    }

                    if(37 in keysDown){ 
                      rotation -= Math.PI/90;
                      for (var i = 0; i < objects.length; ++i)
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j)
                        {
                          var p = objects[i].vertices[j];

                          rotateZ(p, rotation);

                        }
                      }

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {
                          var p = Triangles[i].vertices[j];

                          rotateZ(p, rotation);

                        }
                      }

                      for (var i = 0; i < Particles.length; ++i)
                      {
                        for (var j = 0; j < Particles[i].vertices.length; ++j)
                        {   
                          var p = Particles[i].vertices[j];

                          rotateZ(p, rotation);
                        }
                      }


                      render(objects, ctx, dx, dy);

                      rotation = 0;
                    }


                    if(38 in keysDown){ 
                      rotation -= Math.PI/90;
                      for (var i = 0; i < objects.length; ++i)
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j)
                        {
                          var p = objects[i].vertices[j];

                          rotateX(p, rotation);

                        }
                      }

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {
                          var p = Triangles[i].vertices[j];

                          rotateX(p, rotation);

                        }
                      }

                      for (var i = 0; i < Particles.length; ++i)
                      {
                        for (var j = 0; j < Particles[i].vertices.length; ++j)
                        {   
                          var p = Particles[i].vertices[j];

                          rotateX(p, rotation);
                        }
                      }
                      render(objects, ctx, dx, dy);
                      rotation = 0;
                    }

                    if(40 in keysDown){ 
                      rotation += Math.PI/90;
                      for (var i = 0; i < objects.length; ++i)
                      {
                        for (var j = 0; j < objects[i].vertices.length; ++j)
                        {
                          var p = objects[i].vertices[j];

                          rotateX(p, rotation);

                        }
                      }

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {
                          var p = Triangles[i].vertices[j];

                          rotateX(p, rotation);

                        }
                      }

                      for (var i = 0; i < Particles.length; ++i)
                      {
                        for (var j = 0; j < Particles[i].vertices.length; ++j)
                        {   
                          var p = Particles[i].vertices[j];

                          rotateX(p, rotation);
                        }
                      }

                      render(objects, ctx, dx, dy);

                      rotation = 0;
                    }

                    if(32 in keysDown){ 

                      if(faces == true)
                      {
                       faces = false; 

                     }
                     else{
                      faces = true; 
                    }


                  }

                }

                // Initialize the movement
                function initMove(evt) {
                    //clearTimeout(autorotate_timeout);
                    mousedown = true;
                    mx = evt.clientX;
                    my = evt.clientY;
                  }

                  mxnew = 400;
                  mynew = 400;
                  var moveleft = false;

                  var moveright = false;



                  function move(evt) {

                    if (mousedown) {

                      mx = evt.clientX;
                      my = evt.clientY;

                      for (var i = 0; i < Triangles.length; ++i)
                      {
                        for (var j = 0; j < Triangles[i].vertices.length; ++j)
                        {  


                        }
                      }

                      if(mxnew > mx)
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

                        for (var i = 0; i < Particles.length; ++i)
                        {
                          for (var j = 0; j < Particles[i].vertices.length; ++j)
                          {
                            var p = Particles[i].vertices[j];

                            rotateZ(p, rotation);

                          }
                        }


                        render(objects, ctx, dx, dy);

                        rotation = 0;
                      }

                      if(mx < 1)
                      {
                            //moveleft = true;
                          }
                          else
                          {
                            //moveleft = false;
                          }

                          if(mx > 1500)
                          {
                            //moveright = true;
                          }
                          else
                          {
                            //moveright = false;
                          }

                          if(mxnew < mx)
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

                            for (var i = 0; i < Particles.length; ++i)
                            {
                              for (var j = 0; j < Particles[i].vertices.length; ++j)
                              {
                                var p = Particles[i].vertices[j];

                                rotateZ(p, rotation);

                              }
                            }

                            render(objects, ctx, dx, dy);

                            rotation = 0;
                          }

                          mxnew = mx;


                          if(mynew < my)
                          {
                            rotation += Math.PI/90;
                            for (var i = 0; i < objects.length; ++i)
                            {
                              for (var j = 0; j < objects[i].vertices.length; ++j)
                              {
                                var p = objects[i].vertices[j];

                                rotateX(p, rotation);

                              }
                            }
                            for (var i = 0; i < Particles.length; ++i)
                            {
                              for (var j = 0; j < Particles[i].vertices.length; ++j)
                              {
                                var p = Particles[i].vertices[j];

                                rotateX(p, rotation);

                              }
                            }

                            render(objects, ctx, dx, dy);

                            rotation = 0;
                          }


                          if(mynew > my)
                          {
                            rotation -= Math.PI/90;
                            for (var i = 0; i < objects.length; ++i)
                            {
                              for (var j = 0; j < objects[i].vertices.length; ++j)
                              {
                                var p = objects[i].vertices[j];

                                rotateX(p, rotation);

                              }
                            }

                            for (var i = 0; i < Particles.length; ++i)
                            {
                              for (var j = 0; j < Particles[i].vertices.length; ++j)
                              {
                                var p = Particles[i].vertices[j];

                                rotateX(p, rotation);

                              }
                            }

                            render(objects, ctx, dx, dy);

                            rotation = 0;
                          }


                          mxnew = mx;
                          mynew = my;
                        }


                      }

                      function displaywheel(e){
                            var evt=window.event || e //equalize event object
                            var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta


                            if(delta == 120)
                            {
                              for (var i = 0; i < Triangles.length; ++i) 
                              {
                                for (var j = 0; j < Triangles[i].vertices.length; ++j) 
                                {
                                  Triangles[i].vertices[j].z -= speed;
                                }
                              }
                                //cube_center.z -= speed;
                                render(Triangles, ctx, dx, dy);
                              }
                              else
                              {
                                {
                                  for (var i = 0; i < Triangles.length; ++i) 
                                  {
                                    for (var j = 0; j < Triangles[i].vertices.length; ++j) 
                                    {
                                      Triangles[i].vertices[j].z += speed;
                                    }
                                  }
                                    //cube_center.z += speed;
                                    render(Triangles, ctx, dx, dy);
                                  }
                                }
                              }

                                var rot = 0;
                                function autorotate() {
                                  for (var i = 0; i < objects.length; ++i)
                                  {
                                    for (var j = 0; j < objects[i].vertices.length; ++j)
                                    {
                                        //rotate(objects[i].vertices[j], cube_center, -Math.PI / 720, Math.PI / 720);

                                        //var p = objects[i]    .vertices[j];
                                        
                                       // rotateX(p, rotation);


                                       //if(objects[i].vertices[j].z > -100 && objects[i].vertices[j].z < 100)
                                        //{

                                        //}
                                        //else
                                        //{

                                            //if(objects[i].vertices[j].z > -100 && objects[i].vertices[j].z < 100)
                                             //{
                                               //     objects[i].vertices[j].z += speed;
                                                //}

                                        //}
                                      }
                                    }

                                rotation += Math.PI/1000;
                                for (var i = 0; i < Triangles.length; ++i)
                                {
                                  for (var j = 0; j < Triangles[i].vertices.length; ++j)
                                  {   





                                          // var p = Triangles[i].vertices[j];

                                          // if(p.z > -100)
                                          // {
                                            // p.z -= 5;
                                          // }


                                          //rotateX(p, rotation);


                                       }
                                     
                                   }
                                   rotation = 0;

                                //cube_center.x -= speed;
                                render(objects, ctx, dx, dy);

                                autorotate_timeout = setTimeout(autorotate, 1);
                              }

                              function stopMove() {
                                mousedown = false;
                                autorotate_timeout = setTimeout(autorotate, 2000);
                              }


                              var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

                              if (document.attachEvent) //if IE (and Opera depending on user setting)
                                document.attachEvent("on"+mousewheelevt, displaywheel)
                              else if (document.addEventListener) //WC3 browsers
                                document.addEventListener(mousewheelevt, displaywheel, false)
                              // Events
                              var mousedown = false;
                              var mx = 0;
                              var my = 0;

                              


                              canvas.addEventListener('mousedown', initMove);
                              document.addEventListener('mousemove', move);
                              document.addEventListener('mouseup', stopMove);

