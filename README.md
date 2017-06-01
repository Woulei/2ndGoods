# 2ndGoods React Native

For our final group assignment of @codaisseur Academy and real world project for client 2ndGoods, we were asked to make an app as an additional service to their existing webshop. The app allows sellers to provide 2ndGoods with contact details, the make and model of the product they want to sell through 2ndGoods and pictures of the product in question. This information is sent to the database, where the Google Maps API calculates the distance between the sellers address and the 2ndGoods storage unit, resulting in an estimate for the price of the pick-up, should the seller be interested in this service.

The information is managed in the [backend](https://github.com/florestankorp/SecondGoods_Rails) where we provided CRUD management functionality for admins.

This project is still under construction, so certain features are still pending approval and implementation.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project runs on React Native, please make sure you install it according to these instructions

* [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html)

If you already have React Native, make sure to upgrade to the latest version!

* [Upgrade React Native](https://facebook.github.io/react-native/docs/upgrading.html)


### Installing

After installing React native let's start by cloning the repository

```
git clone git@github.com:Woulei/SecondsGoods_ReactNative.git
```

then

```
cd SecondsGoods_ReactNative
```

install the node modules

```
npm install
```

and voila! We are ready to run our app

```
react-native run-ios
```

or for Android run

```
react-native run-android
```

## Screenshots


Submission form
***
![simulator screen shot 1 jun 2017 09 58 02](https://cloud.githubusercontent.com/assets/22404695/26671281/207e8934-46b5-11e7-8c01-c114101d8ba9.png)

***
How does it work
***

![simulator screen shot 1 jun 2017 09 58 11](https://cloud.githubusercontent.com/assets/22404695/26671283/207f7ce0-46b5-11e7-88e1-b6ad11d0bc4f.png)

***
FAQ
***

![simulator screen shot 1 jun 2017 09 58 24](https://cloud.githubusercontent.com/assets/22404695/26671282/207f3974-46b5-11e7-8858-b0288edd53aa.png)

***
Menu
***

![simulator screen shot 1 jun 2017 09 58 06](https://cloud.githubusercontent.com/assets/22404695/26671284/20829d80-46b5-11e7-8afc-e59d08aa28c2.png)

## Authors

Ruby on Rails (backend / API): @JTBreunissen
Ruby on Rails (backend) + React Native (frontend): @florestankorp
React Native (backend / API): @woulei

See a list of [contributors](https://github.com/Woulei/SecondsGoods_ReactNative/graphs/contributors) who participated in this project.

## Acknowledgments

Many thanks to our client [2ndGoods](https://2ndgoods.nl/en/) for trusting us with the development of their app!
