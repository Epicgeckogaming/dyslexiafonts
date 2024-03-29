(function() {
  var app;

  window.WebFontConfig = {
    google: {
      families: []
    }
  };

  app = angular.module('fdApp', []);

  app.controller('FontDropdownCtrl', function($scope) {
    var WEBFONTAPI;
    WEBFONTAPI = "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    this.FONTSLIST = [
      {
        name: "Arial",
        face: "Arial",
        style: {
          fontFamily: "Arial"
        }
      },
      {
        name: "Times New Roman",
        face: "Times+New+Roman",
        style: {
          fontFamily: 'Times New Roman'
        }
      },
      {
        name: "OpenDyslexic",
        face: "OpenDyslexic",
        style: {
          fontFamily: 'OpenDyslexic',
        }
      },
      {
        name: "LexieReadable-Regular",
        face: "LexieReadable-Regular",
        style: {
          fontFamily: 'LexieReadable-Regular',
        }
      }
    ];
    return this.loadFonts = function() {
      var font, i, len, ref, s, wf;
      ref = this.FONTSLIST;
      for (i = 0, len = ref.length; i < len; i++) {
        font = ref[i];
        WebFontConfig.google.families.push(font.face);
      }
      wf = document.createElement('script');
      wf.src = ('https:' === document.location.protocol ? 'https:' : 'http:') + WEBFONTAPI;
      wf.type = 'text/javascript';
      wf.async = 'true';
      s = document.getElementsByTagName('script')[0];
      return s.parentNode.insertBefore(wf, s);
    };
  });

  app.directive('fdFontDropdown', function() {
    return {
      restrict: 'A',
      controller: 'FontDropdownCtrl',
      link: function(scope, element, attr, Ctrl) {
        Ctrl.loadFonts();
        scope.fontslist = Ctrl.FONTSLIST;
        //scope.selectedIdx = Math.floor(Math.random() * scope.fontslist.length);
        scope.selectedIdx =0;
        
        scope.changeFont = function(idx) {

         var x,y,z,w;
         var a,b,c,d;	


	x = document.getElementById("Show-Ariel-Button");
        y = document.getElementById("Show-Times-New-Roman-Button");
        z = document.getElementById("Show-OpenDyslexic-Button"); 
	w = document.getElementById("Show-LexieDyslexic-Button"); 



        a = document.getElementById("Show-Ariel");

        b= document.getElementById("Show-Times-New-Roman");

        c = document.getElementById("Show-OpenDyslexic");
        
        d = document.getElementById("Show-LexieDyslexic");


        e = document.getElementById("Show-Ariel-7th");
      

        f= document.getElementById("Show-Times-New-Roman-7th");

        g = document.getElementById("Show-OpenDyslexic-7th");
        
        h = document.getElementById("Show-LexieDyslexic-7th");

	i = document.getElementById("Show-Ariel-8th");

        j= document.getElementById("Show-Times-New-Roman-8th");

        k = document.getElementById("Show-OpenDyslexic-8th");
        
        l = document.getElementById("Show-LexieDyslexic-8th");


        m = document.getElementById("Show-Ariel-9th");

        n= document.getElementById("Show-Times-New-Roman-9th");

        o = document.getElementById("Show-OpenDyslexic-9th");
        
        p = document.getElementById("Show-LexieDyslexic-9th");

        q = document.getElementById("Show-Ariel-10th");

        r= document.getElementById("Show-Times-New-Roman-10th");

        s = document.getElementById("Show-OpenDyslexic-10th");
        
        t = document.getElementById("Show-LexieDyslexic-10th");  

        
	 x.style.display = "none";

         y.style.display = "none";
         z.style.display = "none";
	 w.style.display = "none";	

	 a.style.display = "none";

         b.style.display = "none";

         c.style.display = "none";
         d.style.display = "none";

        
         e.style.display = "none";
         

         f.style.display = "none";


         g.style.display = "none";
         h.style.display = "none";

          

         i.style.display = "none";

         j.style.display = "none";

         k.style.display = "none";
         l.style.display = "none";

         m.style.display = "none";

         n.style.display = "none";

         o.style.display = "none";
         p.style.display = "none";

         q.style.display = "none";

         r.style.display = "none";

         s.style.display = "none";
         t.style.display = "none";

    

	if(idx == 0)
         {
		x = document.getElementById("Show-Ariel-Button");
                y = document.getElementById("Show-Times-New-Roman-Button");
                z = document.getElementById("Show-OpenDyslexic-Button"); 
                w = document.getElementById("Show-LexieDyslexic-Button"); 
         }
	 else if(idx == 1)
	 {
		y = document.getElementById("Show-Ariel-Button");
                x = document.getElementById("Show-Times-New-Roman-Button");
                z = document.getElementById("Show-OpenDyslexic-Button"); 
                 w = document.getElementById("Show-LexieDyslexic-Button");

         }
	 else if(idx==2)
         {
		y = document.getElementById("Show-Ariel-Button");
                z = document.getElementById("Show-Times-New-Roman-Button");
                x = document.getElementById("Show-OpenDyslexic-Button"); 
                 w = document.getElementById("Show-LexieDyslexic-Button");
         }
         else 
	 {
		y = document.getElementById("Show-Ariel-Button");
                w = document.getElementById("Show-Times-New-Roman-Button");
                z = document.getElementById("Show-OpenDyslexic-Button"); 
                 x = document.getElementById("Show-LexieDyslexic-Button");
         }
    

         x.style.display = "block";
         y.style.display = "none";
         z.style.display = "none";
        
 	
          scope.selectedIdx = idx;
          return console.log(idx);
        };
        return element.bind('click', function() {
          return element.toggleClass("active");
        });
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQU0sQ0FBQyxhQUFQLEdBQXVCO0lBQ25CLE1BQUEsRUFBUTtNQUNKLFFBQUEsRUFBVTtJQUROO0VBRFc7O0VBTXZCLEdBQUEsR0FBTSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsRUFBd0IsRUFBeEI7O0VBRU4sR0FBRyxDQUFDLFVBQUosQ0FBZSxrQkFBZixFQUFtQyxRQUFBLENBQUMsTUFBRCxDQUFBO0FBQy9CLFFBQUE7SUFBQSxVQUFBLEdBQWE7SUFDYixJQUFDLENBQUEsU0FBRCxHQUFhO01BQ1Q7UUFDSSxJQUFBLEVBQU0saUJBRFY7UUFFSSxJQUFBLEVBQU0sMkJBRlY7UUFHSSxLQUFBLEVBQ0k7VUFBQSxVQUFBLEVBQVksaUJBQVo7VUFDQSxVQUFBLEVBQVksR0FEWjtVQUVBLFNBQUEsRUFBVztRQUZYO01BSlIsQ0FEUztNQVNUO1FBQ0ksSUFBQSxFQUFNLG1CQURWO1FBRUksSUFBQSxFQUFNLG1CQUZWO1FBR0ksS0FBQSxFQUNJO1VBQUEsVUFBQSxFQUFZO1FBQVo7TUFKUixDQVRTO01BZVQ7UUFDSSxJQUFBLEVBQU0sUUFEVjtRQUVJLElBQUEsRUFBTSxZQUZWO1FBR0ksS0FBQSxFQUNJO1VBQUEsVUFBQSxFQUFZO1FBQVo7TUFKUixDQWZTO01BcUJUO1FBQ0ksSUFBQSxFQUFNLFVBRFY7UUFFSSxJQUFBLEVBQU0sVUFGVjtRQUdJLEtBQUEsRUFDSTtVQUFBLFVBQUEsRUFBWTtRQUFaO01BSlIsQ0FyQlM7TUEyQlQ7UUFDSSxJQUFBLEVBQU0sTUFEVjtRQUVJLElBQUEsRUFBTSxVQUZWO1FBR0ksS0FBQSxFQUNJO1VBQUEsVUFBQSxFQUFZLE1BQVo7VUFDQSxVQUFBLEVBQVk7UUFEWjtNQUpSLENBM0JTO01Ba0NUO1FBQ0ksSUFBQSxFQUFNLGFBRFY7UUFFSSxJQUFBLEVBQU0sYUFGVjtRQUdJLEtBQUEsRUFDSTtVQUFBLFVBQUEsRUFBWTtRQUFaO01BSlIsQ0FsQ1M7TUF3Q1Q7UUFDSSxJQUFBLEVBQU0sUUFEVjtRQUVJLElBQUEsRUFBTSxRQUZWO1FBR0ksS0FBQSxFQUNJO1VBQUEsVUFBQSxFQUFZO1FBQVo7TUFKUixDQXhDUztNQThDVDtRQUNJLElBQUEsRUFBTSxlQURWO1FBRUksSUFBQSxFQUFNLGVBRlY7UUFHSSxLQUFBLEVBQ0k7VUFBQSxVQUFBLEVBQVk7UUFBWjtNQUpSLENBOUNTO01Bb0RUO1FBQ0ksSUFBQSxFQUFNLFdBRFY7UUFFSSxJQUFBLEVBQU0sV0FGVjtRQUdJLEtBQUEsRUFDSTtVQUFBLFVBQUEsRUFBWTtRQUFaO01BSlIsQ0FwRFM7O1dBNERiLElBQUMsQ0FBQSxTQUFELEdBQWEsUUFBQSxDQUFBLENBQUE7QUFDVCxVQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUE7QUFBQTtNQUFBLEtBQUEscUNBQUE7O1FBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBOUIsQ0FBbUMsSUFBSSxDQUFDLElBQXhDO01BREo7TUFHQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7TUFDTCxFQUFFLENBQUMsR0FBSCxHQUFTLENBQUksUUFBQSxLQUFZLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBakMsR0FBK0MsUUFBL0MsR0FBNkQsT0FBOUQsQ0FBQSxHQUF5RTtNQUNsRixFQUFFLENBQUMsSUFBSCxHQUFVO01BQ1YsRUFBRSxDQUFDLEtBQUgsR0FBVztNQUNYLENBQUEsR0FBSSxRQUFRLENBQUMsb0JBQVQsQ0FBOEIsUUFBOUIsQ0FBd0MsQ0FBQSxDQUFBO2FBQzVDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBYixDQUEwQixFQUExQixFQUE4QixDQUE5QjtJQVRTO0VBOURrQixDQUFuQzs7RUEwRUEsR0FBRyxDQUFDLFNBQUosQ0FBYyxnQkFBZCxFQUFnQyxRQUFBLENBQUEsQ0FBQTtBQUM1QixXQUFPO01BQ0gsUUFBQSxFQUFVLEdBRFA7TUFFSCxVQUFBLEVBQVksa0JBRlQ7TUFHSCxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLENBQUE7UUFDRixJQUFJLENBQUMsU0FBTCxDQUFBO1FBQ0EsS0FBSyxDQUFDLFNBQU4sR0FBa0IsSUFBSSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxXQUFOLEdBQW9CLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBM0M7UUFFcEIsS0FBSyxDQUFDLFVBQU4sR0FBbUIsUUFBQSxDQUFDLEdBQUQsQ0FBQTtVQUNmLEtBQUssQ0FBQyxXQUFOLEdBQW9CO2lCQUNwQixPQUFPLENBQUMsR0FBUixDQUFZLEdBQVo7UUFGZTtlQUluQixPQUFPLENBQUMsSUFBUixDQUFhLE9BQWIsRUFBc0IsUUFBQSxDQUFBLENBQUE7aUJBQ2xCLE9BQU8sQ0FBQyxXQUFSLENBQW9CLFFBQXBCO1FBRGtCLENBQXRCO01BVEU7SUFISDtFQURxQixDQUFoQztBQWxGQSIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5XZWJGb250Q29uZmlnID0ge1xuICAgIGdvb2dsZToge1xuICAgICAgICBmYW1pbGllczogW11cbiAgICB9XG59XG5cbmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdmZEFwcCcsIFtdKVxuXG5hcHAuY29udHJvbGxlcignRm9udERyb3Bkb3duQ3RybCcsICgkc2NvcGUpIC0+XG4gICAgV0VCRk9OVEFQSSA9IFwiLy9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy93ZWJmb250LzEvd2ViZm9udC5qc1wiXG4gICAgQEZPTlRTTElTVCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJTb3VyY2UgU2FucyBQcm9cIlxuICAgICAgICAgICAgZmFjZTogXCJTb3VyY2UrU2FucytQcm86OTAwaXRhbGljXCJcbiAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA5MDBcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJRdWF0dHJvY2VudG8gU2Fuc1wiXG4gICAgICAgICAgICBmYWNlOiBcIlF1YXR0cm9jZW50bytTYW5zXCJcbiAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdRdWF0dHJvY2VudG8gU2FucydcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlVidW50dVwiXG4gICAgICAgICAgICBmYWNlOiBcIlVidW50dTo3MDBcIlxuICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1VidW50dSdcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFyaXpvbmlhXCJcbiAgICAgICAgICAgIGZhY2U6IFwiQXJpem9uaWFcIlxuICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaXpvbmlhJ1xuICAgICAgICB9IFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkxvcmFcIlxuICAgICAgICAgICAgZmFjZTogXCJMb3JhOjcwMFwiXG4gICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkxvcmFcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU2Fuc2l0YSBPbmVcIlxuICAgICAgICAgICAgZmFjZTogXCJTYW5zaXRhK09uZVwiXG4gICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlNhbnNpdGEgT25lXCJcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkFybWF0YVwiXG4gICAgICAgICAgICBmYWNlOiBcIkFybWF0YVwiXG4gICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFybWF0YVwiXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCbGFjayBPcHMgT25lXCJcbiAgICAgICAgICAgIGZhY2U6IFwiQmxhY2srT3BzK09uZVwiXG4gICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkJsYWNrIE9wcyBPbmVcIlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUnVzc28gT25lXCJcbiAgICAgICAgICAgIGZhY2U6IFwiUnVzc28rT25lXCJcbiAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUnVzc28gT25lXCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIEBsb2FkRm9udHMgPSAtPlxuICAgICAgICBmb3IgZm9udCBpbiBARk9OVFNMSVNUXG4gICAgICAgICAgICBXZWJGb250Q29uZmlnLmdvb2dsZS5mYW1pbGllcy5wdXNoKGZvbnQuZmFjZSlcblxuICAgICAgICB3ZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICAgIHdmLnNyYyA9IChpZiAnaHR0cHM6JyBpcyBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB0aGVuICdodHRwczonIGVsc2UgJ2h0dHA6JykgKyBXRUJGT05UQVBJXG4gICAgICAgIHdmLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICB3Zi5hc3luYyA9ICd0cnVlJ1xuICAgICAgICBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdXG4gICAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2YsIHMpXG4pXG5cbmFwcC5kaXJlY3RpdmUoJ2ZkRm9udERyb3Bkb3duJywgLT5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogJ0EnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdGb250RHJvcGRvd25DdHJsJ1xuICAgICAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIEN0cmwpIC0+XG4gICAgICAgICAgICBDdHJsLmxvYWRGb250cygpXG4gICAgICAgICAgICBzY29wZS5mb250c2xpc3QgPSBDdHJsLkZPTlRTTElTVFxuICAgICAgICAgICAgc2NvcGUuc2VsZWN0ZWRJZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzY29wZS5mb250c2xpc3QubGVuZ3RoKVxuXG4gICAgICAgICAgICBzY29wZS5jaGFuZ2VGb250ID0gKGlkeCkgLT5cbiAgICAgICAgICAgICAgICBzY29wZS5zZWxlY3RlZElkeCA9IGlkeFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIGlkeFxuXG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgLT5cbiAgICAgICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICApXG4gICAgfVxuKVxuIl19
//# sourceURL=coffeescript
