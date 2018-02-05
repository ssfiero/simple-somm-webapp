(function() {
  'use strict'

  angular.module('app')
    .component('home', {
      templateUrl: '/js/component/home.template.html',
      controller: controller
    })

  controller.inject = ['$http']
  function controller($http) {
    const vm = this

    vm.$onInit = onInit

    // function onInit() {
    //   $http.get('/')
    //
    // }


  }

})();
