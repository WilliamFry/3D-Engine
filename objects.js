var Cube = function(center, side) {
              // Generate the vertices
              var d = side / 2;

              this.vertices = [
              new Vertex(center.x - d, center.y - d, center.z + d),
              new Vertex(center.x - d, center.y - d, center.z - d),
              new Vertex(center.x + d, center.y - d, center.z - d),
              new Vertex(center.x + d, center.y - d, center.z + d),
              new Vertex(center.x + d, center.y + d, center.z + d),
              new Vertex(center.x + d, center.y + d, center.z - d),
              new Vertex(center.x - d, center.y + d, center.z - d),
              new Vertex(center.x - d, center.y + d, center.z + d)
              ];

              // Generate the faces
              this.faces = [
              [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
              [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
              [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
              [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
              [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
              [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]
              ];
            };

            var Triangles = [];

            var Triangle1 = function(p1,p2,p3, side){
                      // Generate the vertices
                      var d = side / 2;


                      this.vertices = [
                      new Vertex(p1, p1, p1),
                      new Vertex(p2, p2, p2),
                      new Vertex(p3, p3, p3),
                      ];

                      // Generate the faces
                      this.faces = [
                      [this.vertices[0], this.vertices[1], this.vertices[2]]
                      ];
                    };

                    var Triangle = function(center, side){
                              // Generate the vertices
                              var d = side / 2;

                              this.vertices = [
                              new Vertex(center.x - d, center.y - d, center.z + d),
                              new Vertex(center.x - d, center.y - d, center.z - d),
                              new Vertex(center.x + d, center.y - d, center.z - d),
                              new Vertex(center.x + d, center.y - d, center.z + d)
                              ];

                              // Generate the faces
                              this.faces = [
                              [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
                              ];
                            };

                            var Particles = []


                            var Particle = function(center, side) {
                      // Generate the vertices
                      var d = side / 2;

                      this.vertices = [
                      new Vertex(center.x - d, center.y - d, center.z + d),
                      ];

                    };


var pos = 0;
function CubeMaker()
{

  for(var x = -5; x <= 5; x++)
  {
   for(var y = -5; y <= 5; y++)
   {
    //objects.push(new Cube(new Vertex(y * 50, x * 50, -120), 50));
        //hi += 1;
      }
    }

    for(var x = -cudesize; x <= cudesize; x++)
    {
      for(var y = -cudesize; y <= cudesize; y++)
      {
            //objects.push(new Cube(new Vertex(x * 50, 250, y * 50), 50));
          }
        }

        for(var x = -cudesize; x <= cudesize; x++)
        {
          for(var y = -cudesize; y <= cudesize; y++)
          {

            //Particles.push(new Particle(new Vertex(getRndInteger(-pos,1000), getRndInteger(-pos,1000), getRndInteger(-pos,1000)), 50));
            //pos+= 10;
          }
        }

        for(var x = -100; x <= 10; x++)
        {
          for(var y = -10; y <= 10; y++)
          {

           // Triangles.push(new Triangle(new Vertex(y * 200, x * 200, -250), 8));
          }
        }

        for(var x = -100; x <= 10; x++)
        {
          for(var y = -10; y <= 10; y++)
          {

            Triangles.push(new Triangle(new Vertex(y * 200, x * 200, 0), 8));
          }
        }


        for(var x = -100; x <= 10; x++)
        {
          for(var y = -10; y <= 10; y++)
          {

            Triangles.push(new Triangle(new Vertex(y * 200, x * 200, 250), 8));
          }
        }
        pos = 0

        for(var x = -cudesize; x <= cudesize; x++)
        {
            //Triangles.push(new Triangle(new Vertex(x,x, x,x, 100,100), 50));
          }

          for(var x = -cudesize; x <= cudesize; x++)
          {
            for(var y = -cudesize; y <= cudesize; y++)
            {
          //  Particles.push(new Particle(new Vertex(getRndInteger(-1000,1000), getRndInteger(-1000,1000), getRndInteger(-1000,1000)), 50));
        }
      }

      for(var x = -cudesize; x <= cudesize; x++)
      {
        for(var y = -cudesize; y <= cudesize; y++)
        {
            //objects.push(new Cube(new Vertex(-300, x * 50, y * 50), 50));
          }
        }

        for(var x = -2; x <= 2; x++)
        {
          for(var y = -2; y <= 2; y++)
          {
           //Particles.push(new Particle(new Vertex(x * 90,500 , y * 90), 100));
        }
      }

      var hi = 0;



      for(var x = -100; x <= 100; x++)
      {
       //objects.push(new Cube(new Vertex(0, x * 50, -100), 50));
      }

     for(var x = -5; x <= 10; x++)
     {


       // objects.push(new Cube(new Vertex(getRndInteger(-1000,1000), getRndInteger(10,1), getRndInteger(1,1)), 50));

     }

   }
