angular.module('networkingApp')
    .service('userServ', function($http){
      var userData = [
        {
          id: 1,
          firstName: 'David',
          lastName: 'Mayes',
          headShot: 'http://davidmayesphoto.com/wp-content/uploads/2016/08/DRM_8813-1067x712.jpg',
          age: 27,
          gender: 'Male',
          city: 'Lehi',
          state: 'Utah',
          username: 'david',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 2,
          firstName: 'Bri',
          lastName: 'Mayes',
          headShot: 'http://davidmayesphoto.com/wp-content/uploads/2016/08/DRM_8740-1067x712.jpg',
          age: 25,
          gender: 'Female',
          city: 'Lehi',
          state: 'Utah',
          username: 'bri',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 3,
          firstName: 'Rachael',
          lastName: 'Zilga',
          headShot: 'https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg',
          age: 27,
          gender: 'Female',
          city: 'Grand Junction',
          state: 'Colorado',
          username: 'rachael',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 4,
          firstName: 'Austin',
          lastName: 'Zilga',
          headShot: 'https://pmctvline2.files.wordpress.com/2016/06/person-of-interest-series-finale-reese.jpg',
          age: 43,
          gender: 'Male',
          city: 'Grand Junction',
          state: 'Colorado',
          username: 'austin',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 5,
          firstName: 'Stephanie',
          lastName: 'Param',
          headShot: 'http://cooleysanemia.org/boduw/wp-content/uploads/2012/09/AASmall.jpg',
          age: 25,
          gender: 'Female',
          city: 'Mesa',
          state: 'Arizona',
          username: 'stephanie',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 6,
          firstName: 'John',
          lastName: 'Cedar',
          headShot: 'http://cdn.redalertpolitics.com/files/2016/05/milo.png',
          age: 31,
          gender: 'Male',
          city: 'Idaho Falls',
          state: 'Idaho',
          username: 'John',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 7,
          firstName: 'Brittany',
          lastName: 'Stoops',
          headShot: 'http://freeuse.io/img_highres/4706-person-sunglasses-woman.jpg',
          age: 28,
          gender: 'Female',
          city: 'Sacramento',
          state: 'California',
          username: 'brittany',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 8,
          firstName: 'Justin',
          lastName: 'Maughn',
          headShot: 'https://pbs.twimg.com/profile_images/1717956431/BP-headshot-fb-profile-photo_400x400.jpg',
          age: 33,
          gender: 'Male',
          city: 'Des Moines',
          state: 'Iowa',
          username: 'Justin',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 9,
          firstName: 'Cherice',
          lastName: 'Capsta',
          headShot: 'http://cdn.playbuzz.com/cdn/88fc4feb-5b67-481f-86f7-f5a8fbd0bf59/41066b2a-b7ee-4fba-8f6c-ac3a986cf25a.jpg',
          age: 32,
          gender: 'Female',
          city: 'St. George',
          state: 'Utah',
          username: 'Cherice',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
        {
          id: 10,
          firstName: 'Barack',
          lastName: 'Obama',
          headShot: 'https://static.pexels.com/photos/2281/man-person-suit-united-states-of-america.jpg',
          age: 53,
          gender: 'Male',
          city: 'Little Rock',
          state: 'Arkansas',
          username: 'barack',
          password: 'ilovetocode',
          comments: [
            'This is the first comment.',
            'How about a second comment?'
          ],
          friends: []
        },
      ];

      localStorage.setItem(1, JSON.stringify(userData))

      this.getUserData = function(){
        // return userData;
        return JSON.parse(localStorage.getItem(1));
      };

      // this.getUser = function(id){
      //   return userData.find(user => user.id === +id);
      // };

      this.getUser = function(id){
        return JSON.parse(localStorage.getItem(1)).find(user => user.id === +id);
      };

      // login function /////////////////

      /// use arr.find()
      // this.checkCredentials = function(user, pass){
      //   var currentUserData = JSON.parse(localStorage.getItem(1));
      //   for(var i = 0;i < currentUserData.length; i++){
      //     if(currentUserData[i].username === user && currentUserData[i].password === pass){
      //       return currentUserData[i].id;
      //     } else {
      //       console.log('no match');
      //     }
      //   }
      // };

      this.checkCredentials = function(username, pass){

          return JSON.parse(localStorage.getItem(1)).find(function(user){
            console.log(user)
              return user.username === username && user.password === pass
            });
          }

      // add a comment function ///////////


      // arr.map()
      this.addComment = function(id, comment){
        var currentUserData = JSON.parse(localStorage.getItem(1));
        for(var i = 0; i < currentUserData.length; i++){
          if(currentUserData[i].id === id){
            currentUserData[i].comments.unshift(comment);
            localStorage.setItem(1, JSON.stringify(currentUserData));
          }
        }
        return currentUserData;
      }


      this.addComment = function(id, comment){
        const currentUserData = JSON.parse(localStorage.getItem(1)).map(function(user){
          if (user.id === id) {
            user.comments.unshift(comment);
            }
            return user;
        });
        localStorage.setItem(1, JSON.stringify(currentUserData));
            return currentUserData;
        }

      // new user constructor  & function ////////////

      var newId = 11;

      var newUser = function(firstName, lastName, age, gender, city, state, username, password){
        this.id = newId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.state = state;
        this.username = username;
        this.password = password;
        this.comments = [];
      };

      this.createUser = function(firstName, lastName, age, gender, city, state, username, password){
        if(firstName && lastName && age && gender && city && state && username && password){
          var currentUserData = JSON.parse(localStorage.getItem(1));
          currentUserData.unshift(new newUser(firstName, lastName, age, gender, city, state, username, password));
          newId++;
          localStorage.setItem(1, JSON.stringify(currentUserData));
          return currentUserData;
        } else {
          console.log('there are still blanks!');
        }
      }

      // add friend function ///////////////

      this.addFriend = function(friendId, myId){
        var currentUserData = JSON.parse(localStorage.getItem(1));
        for(var i = 0; i < currentUserData.length; i++){
          if(currentUserData[i].id === +myId){
            for(var g = 0; g < currentUserData.length; g++){
              if(currentUserData[g].id === friendId){
                currentUserData[i].friends.unshift(currentUserData[g]);
                localStorage.setItem(1, JSON.stringify(currentUserData));
                return currentUserData;
              }
            }
          }
        }
      }


    });
