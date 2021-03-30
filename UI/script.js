(function () {
  let adList = [
    {
      id: "1",
      description: "Parking space",
      createdAt: new Date("2021-01-15T09:35:17"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "60 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "2",
      description: "Parking space",
      createdAt: new Date("2021-02-11T11:11:11"),
      location: "Parking on Irving St, B1",
      carNumber: "1234 AB-7",
      parkingPlaceNumber: 32,
      monthlyCost: "45 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "13 days",
    },

    {
      id: "3",
      description: "Parking space",
      createdAt: new Date("2020-12-25T07:05:00"),
      location: "Parking on Hill Street, B5",
      carNumber: "1923 CT-2",
      parkingPlaceNumber: 67,
      monthlyCost: "70 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "19 days",
    },
    {
      id: "4",
      description: "Parking space",
      createdAt: new Date("2021-01-01T12:00:00"),
      location: "Parking on Holiday Inn, B5",
      carNumber: "3756 HF-6",
      parkingPlaceNumber: 43,
      monthlyCost: "90 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "2 days",
    },

    {
      id: "5",
      description: "Parking space",
      createdAt: new Date("2021-01-03T11:23:45"),
      location: "Parking on Centre City, Hinckley Street, B5",
      carNumber: "0923 BG-2",
      parkingPlaceNumber: 80,
      monthlyCost: "30 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "6",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Rickman Drive, B15",
      carNumber: "1716 AF-3",
      parkingPlaceNumber: 23,
      monthlyCost: "40 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "7",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on City Walk Apartments, B1",
      carNumber: "1515 FF-2",
      parkingPlaceNumber: 112,
      monthlyCost: "21 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "8",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Marshall Street Concord House, B1",
      carNumber: "1919 AH-7",
      parkingPlaceNumber: 93,
      monthlyCost: "53 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "9",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Garage on West Side One, B1",
      carNumber: "9231 ST-4",
      parkingPlaceNumber: 152,
      monthlyCost: "78 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "10",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 59,
      monthlyCost: "46 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "11",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 12,
      monthlyCost: "74 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "12",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 80,
      monthlyCost: "58 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "13",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 54,
      monthlyCost: "92 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },
    {
      id: "14",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 11,
      monthlyCost: "47 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "15",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 86,
      monthlyCost: "15 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "16",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 17,
      monthlyCost: "110 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "17",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 87,
      monthlyCost: "73 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "18",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 56,
      monthlyCost: "55 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "19",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 43,
      monthlyCost: "90 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },

    {
      id: "20",
      description: "Parking space",
      createdAt: new Date("2021-01-11T11:45:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "68 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    },
  ];

  class postCollection { // this в js критически важен
    constructor(_adList) {
      this._adList = _adList;
    }

    size() {
      return this._adList.length;
    }

    clear() {
      this._adList.splice(0, this._adList.length);
    }

    addAll(toAdd) {
      let failed = [];
      toAdd.forEach((item) => {
        if (!this.add(item)) {
          failed.push(item);
        }
      });
      return failed;
    }

    get posts() {
      return this._adList;
    }

    remove(id) {
      let toDelete = this._adList.find((item) => item.id === id);
      if (!toDelete) {
        console.log("Post with this id doesn't exist");
        return false;
      }

      this._adList.splice(this._adList.indexOf(toDelete), 1);
      return true;
    }

    compareDate(a, b) {
      return b.createdAt - a.createdAt;
    }

    comparePrice(a, b) {
      return b.monthlyCost - a.monthlyCost;
    }

    getPage(skip = 0, top = 10, filterConfig = {}, sortType = "Date") {
      let toReturn = this._adList;
      if (sortType === "Date") {
        toReturn.sort(this.compareDate);
      } else if (sortType === "Price") {
        toReturn.sort(this.comparePrice);
      }

      if (filterConfig.hasOwnProperty("monthlyCost")) {
        toReturn = toReturn.filter(function (item) {
          return item.monthlyCost === filterConfig.monthlyCost;
        });
      }

      return toReturn.slice(skip, skip + top);
    }

    get(id) {
      let item = this._adList.find((item) => item.id === id);
      if (!item) {
        console.log("Element not found");
        return null;
      }
      return item;
    }

    static validate(item) {
      if (!Object.prototype.hasOwnProperty.call(item, 'id')) {
        console.log("The element has no id!");
        return false;
      }
      if (typeof item.id !== "string") {
        console.log("Id has illegal type");
        return false;
      }

      if (!item.hasOwnProperty("description")) {
        console.log("The element has no description!");
        return false;
      } else if (typeof item.description !== "string") {
        console.log("Description has illegal type");
        return false;
      } else if (item.description.length >= 200) {
        console.log("The description is too long!");
        return false;
      }

      if (!item.hasOwnProperty("createdAt")) {
        console.log("Element has no createdAt data!");
        return false;
      }
      if (!(item.createdAt instanceof Date)) {
        console.log("CreatedAt has illegal type");
        return false;
      }

      if (!item.hasOwnProperty("carNumber")) {
        console.log("Element has no carNumber!");
        return false;
      }
      if (typeof item.carNumber !== "string") {
        console.log("carNumber has illegal type");
        return false;
      }

      if (!item.hasOwnProperty("parkingPlaceNumber")) {
        console.log("Element has no parkingPlaceNumber!");
        return false;
      }
      if (typeof item.parkingPlaceNumber !== "number") {
        console.log("parkingPlaceNumber has illegal type");
        return false;
      }

      if (!item.hasOwnProperty("monthlyCost")) {
        console.log("Element has no monthlyCost!");
        return false;
      }
      if (typeof item.monthlyCost !== "string") {
        console.log("monthlyCost has illegal type");
        return false;
      }

      if (!item.hasOwnProperty("startDate")) {
        console.log("Element has no startDate data!");
        return false;
      }
      if (!(item.startDate instanceof Date)) {
        console.log("startDate has illegal type");
        return false;
      }

      if (!item.hasOwnProperty("duration")) {
        console.log("Element has no duration!");
        return false;
      }
      if (typeof item.duration !== "string") {
        console.log("duration has illegal type");
        return false;
      }

      return true;
    }

    add(post) {
      if (!postCollection.validate(post)) return false;  // к static методу обращаемся от имени класса(иначе он не понимает откуда мы взяли validate, ибо если без this и прочего, то он думает что это функция вне класса)
      let test = this._adList.find((a) => a.id === post.id);
      if (test) {
        console.log("You already have a post with this id");
        return false;
      }
      this._adList.push(post);
      return true;
    }

    edit(id, post) {  // поменять все поля кроме id, createdAt
      let item = this._adList.find((item) => item.id === id);
      if (!postCollection.validate(post)) return false;
      if (!item) {
        console.log("Post with this id doesn't exist");
        return false;
      }

      if (post.hasOwnProperty("id")) {
        if (item.id !== post.id) {
          console.log("You mustn't change id!");
          return false;
        }
      }

      if (post.hasOwnProperty("createdAt")) {
        if (item.createdAt.getTime() !== post.createdAt.getTime()) {
          console.log("You mustn't change createdAt data!");
          return false;
        }
      }

      let final = Object.assign(item, post);

      if (post.hasOwnProperty("description")) { // можно ли проитерироваться по полям и убрать кучу этих ифов
        final.description = post.description;
      }

      if (post.hasOwnProperty("location")) {
        final.location = post.location;
      }

      if (post.hasOwnProperty("carNumber")) {
        final.carNumber = post.carNumber;
      }

      if (post.hasOwnProperty("parkingPlaceNumber")) {
        final.parkingPlaceNumber = post.parkingPlaceNumber;
      }

      if (post.hasOwnProperty("monthlyCost")) {
        final.monthlyCost = post.monthlyCost;
      }

      if (post.hasOwnProperty("startDate")) {
        final.startDate = post.startDate;
      }

      if (post.hasOwnProperty("duration")) {
        final.duration = post.duration;
      }

      this._adList.splice(adList.indexOf(item), 1, final); // replace
      return true;
    }
  }

  let _postCollection = new postCollection(adList);
  console.log("Created Collection : ");
  console.log(_postCollection.posts);

  /*console.log(`Current size: ${_postCollection.size()}`);
  console.log('Clearing collection:');
  _postCollection.clear();
  console.log(`Current size: ${_postCollection.size()}`);

  console.log('Adding all posts from an array:');
  console.log(_postCollection.addAll(adList));
  console.log(`Current size: ${_postCollection.size()}`);*/

  console.log('Get post with id === 1:');
  console.log(_postCollection.get('1'));

  console.log('Trying to get post with id === 0:');
  console.log(_postCollection.get('0'));

  console.log('Get first 3 posts sorted by date:');
  console.log(_postCollection.getPage(0, 3));

  console.log('Get fifth and sixth posts sorted by price:');
  console.log(_postCollection.getPage(4, 2, {}, "Price"));

  console.log('Trying to add an element with existing id: ');
  console.log(
    _postCollection.add({
      id: "20",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8357 AC-9",
      parkingPlaceNumber: 726,
      monthlyCost: "100 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "3 days",
    }),
  );

  console.log('Adding an element: ');
  console.log(
    _postCollection.add({
      id: "21",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "60 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    }),
  );
  console.log(_postCollection.posts);

  console.log('Validating a post without id:');
  console.log(
    postCollection.validate({
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "60 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    }),
  );

  console.log('Validating a post with long description:');
  console.log(
    postCollection.validate({
      id: '111',
      description:
        '42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42'
        + '42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_'
        + '42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_',
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "60 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    }),
  );

  console.log('Validating a post which has illegal id type:');
  console.log(
    postCollection.validate({
      id: 111,
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "60 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    }),
  );

  console.log('Validating a post with illegal createdAt type:');
  console.log(
    postCollection.validate({
      id: '111',
      description: "Parking space",
      createdAt: 111,
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "60 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    }),
  );

  console.log('Validating correct post:');
  console.log(
    postCollection.validate({
      id: "19",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "68 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    }),
  );

  console.log('Trying to change id: ');
  console.log(
    _postCollection.edit('1', {
      id: "67",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "8367 PA-9",
      parkingPlaceNumber: 76,
      monthlyCost: "60 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "15 days",
    }),
  );

  console.log("Trying to change a post which doesn't exist: ");
  console.log(
    _postCollection.edit("102", {
      id: "2",
      description: "Parking space",
      createdAt: new Date("2021-01-21T12:00:00"),
      location: "Parking on Blossom Street, YO24",
      carNumber: "1234 AB-7",
      parkingPlaceNumber: 76,
      monthlyCost: "45 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "13 days",
    }),
  );

  console.log('Successful editing: ');
  console.log(
    _postCollection.edit("20", {
      id: "20",
      description: "Parking space",
      createdAt: new Date("2021-01-11T11:45:00"),
      location: "Parking on The Arcadian Management Suite, B5",
      carNumber: "1234 AB-9",
      parkingPlaceNumber: 56,
      monthlyCost: "70 $",
      startDate: new Date("2022-03-21T12:00:00"),
      duration: "12 days",
    }),
  );

  console.log('Edited element:');
  console.log(_postCollection.get('20'));

  console.log("Trying to remove an ad which doesn't exist:");
  console.log(_postCollection.remove('0'));

  console.log('Removing an element:');
  console.log(_postCollection.remove('1'));

  console.log('Final array :');
  console.log(_postCollection.posts);

}());