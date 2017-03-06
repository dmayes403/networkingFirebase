
(function() {
// Initialize Firebase
    const config = {
    apiKey: "AIzaSyDpCrLD5h8bIdrOabLkz_VGJ0nietfgaYc",
    authDomain: "networkingfirebase.firebaseapp.com",
    databaseURL: "https://networkingfirebase.firebaseio.com",
    storageBucket: "networkingfirebase.appspot.com",
    messagingSenderId: "709021430131"
    };

    firebase.initializeApp(config);


    angular.module('networkingApp')
        .service('userServ', function($http, $firebaseArray){
          const rootRef = firebase.database().ref().child('users');
          this.object = $firebaseArray(rootRef);

          // this.addFireComment = function(word){
          //   this.object.$add(word);
          // }


          this.getUser = function(id){
            return this.object.find(user => user.id === +id);
          };

          // login function /////////////////

          this.checkCredentials = function(email, pass){

              return this.object.find(function(user){
                  return user.email === email && user.password === pass
                });
              }

          // add a comment function ///////////


          // arr.map()
          // this.addComment = function(id, comment){
          //   var currentUserData = JSON.parse(localStorage.getItem(1));
          //   for(var i = 0; i < currentUserData.length; i++){
          //     if(currentUserData[i].id === id){
          //       currentUserData[i].comments.unshift(comment);
          //       localStorage.setItem(1, JSON.stringify(currentUserData));
          //     }
          //   }
          //   return currentUserData;
          // }


          this.addComment = function(id, comment){
            const currentUserData = this.object.map(function(user){
              if (user.$id === id) {
                user.comments.unshift(comment);
                }
                return user;
            });
            localStorage.setItem(1, JSON.stringify(currentUserData));
                return currentUserData;
            }

            // this.addComment = function(id, comment){
            //   for(var i = 0; i < this.object.length; i++){
            //     if (this.object[i].$id === id) {
            //       console.log(this.object[i].comments)
            //       this.object[i].comments.unshift(comment);
            //       }
            //   }
            // }
            //
              this.addFireComment = function(word){
                this.comments = this.object[0].comments;
                this.comments.push('hello');
                this.object[0].comments.update(this.comments)
                console.log(this.object[0].comments);
              }


          // new user constructor  & function ////////////

          var newId = 11;

          // var newUser = function(firstName, lastName, age, gender, city, state, username, password){
          //   this.id = newId;
          //   this.firstName = firstName;
          //   this.lastName = lastName;
          //   this.age = age;
          //   this.gender = gender;
          //   this.city = city;
          //   this.state = state;
          //   this.username = username;
          //   this.password = password;
          //   this.comments = [];
          // };
          //
          // this.createUser = function(firstName, lastName, age, gender, city, state, username, password){
          //   if(firstName && lastName && age && gender && city && state && username && password){
          //     var currentUserData = JSON.parse(localStorage.getItem(1));
          //     currentUserData.unshift(new newUser(firstName, lastName, age, gender, city, state, username, password));
          //     newId++;
          //     localStorage.setItem(1, JSON.stringify(currentUserData));
          //     return currentUserData;
          //   } else {
          //     console.log('there are still blanks!');
          //   }
          // }

          var newUser = function(firstName, lastName, email, age, gender, city, state, username, password){
            console.log('hello');
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.age = age;
            this.gender = gender;
            this.city = city;
            this.state = state;
            this.username = username;
            this.password = password;
            this.comments = ['first comment'];
          };

          this.createUser = function(firstName, lastName, email, age, gender, city, state, username, password){
            if(firstName && lastName && email && age && gender && city && state && username && password){
              console.log(this.comments);
              this.object.$add(new newUser(firstName, lastName, email, age, gender, city, state, username, password));
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
})();
