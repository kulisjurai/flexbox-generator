const myApp = angular.module('myApp', ['ngclipboard']);

myApp.controller('MainController', ['$scope', function($scope) {
    $scope.itemArray = [];
    let focusCube;
    $scope.playgroundOpen = true;

    $scope.containerStyle = {
        'display': 'flex',
        'flex-wrap': 'nowrap',
        'flex-direction': 'row',
        'justify-content': 'flex-start',
        'align-content': 'flex-start',
        'align-items': 'flex-start',
    }

    $scope.defaultDisplay = function(length) {
        for (let i = 0; i < length; i++) {
            $scope.itemArray.push({
                'min-width': '95px',
                'min-height': '95px',
                'color': 'rgb(255, 110, 58)',
                'margin': '13px',
                'background-color': 'rgb(41, 124, 192)',
                'border-radius': '5px',
                'order': '0',
                'flex-grow': '0',
                'flex-shrink': '0',
                'flex-basis': '0',
                'align-self': 'auto',
                'cursor': 'pointer'
            });
            if (i == 0) $scope.itemArray[i].visible = true;
        }
        focusCube = $scope.itemArray[0];
    }

    $scope.displayOptions = ['inline-flex', 'flex'];
    $scope.directionOptions = ['row', 'column', 'row-reverse', 'column-reverse'];
    $scope.justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit'];
    $scope.alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit', 'strecth'];
    $scope.alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'initial', 'inherit', 'strecth'];
    $scope.alignSelfOptions = ['auto', 'flex-end', 'flex-start', 'stretch', 'center', 'baseline'];
    $scope.wrapOptions = ['wrap', 'nowrap', 'wrap-reverse'];


    $scope.addItem = function() {
        $scope.itemArray.push({
            'min-width': '95px',
            'min-height': '95px',
            'color': 'rgb(255, 110, 58)',
            'margin': '13px',
            'background-color': 'rgb(41, 124, 192)',
            'border-radius': '5px',
            'order': '0',
            'flex-grow': '0',
            'flex-shrink': '0',
            'flex-basis': '0',
            'align-self': 'auto',
            'cursor': 'pointer'
        });
    }

    $scope.deleteItem = function() {
        if ($scope.itemArray[$scope.itemArray.length - 1].visible) {
            $scope.itemArray[$scope.itemArray.length - 2].visible = true;
        }
        $scope.itemArray.pop();
    }

    $scope.detectItem = function(target) {

        focusCube = $scope.itemArray[target];
        focusCube.visible = true;

        for (let i = 0; i < $scope.itemArray.length; i++) {
            i == target ? $scope.itemArray[i].visible = true : $scope.itemArray[i].visible = false;
        }
    }

    $scope.setDirection = function(direction) {
        if (direction !== null && display !== undefined) $scope.containerStyle['flex-direction'] = direction;
    }

    $scope.setDisplay = function(display) {
        if (display !== null && display !== undefined) $scope.containerStyle.display = display;
    }

    $scope.setJustifyContent = function(position) {
        if (position !== null && display !== undefined) $scope.containerStyle['justify-content'] = position;
    }

    $scope.setWrap = function(option) {
        if (option !== null && display !== undefined) $scope.containerStyle['flex-wrap'] = option;
    }

    $scope.setAlignContent = function(position) {
        if (position !== null && display !== undefined) $scope.containerStyle['align-content'] = position;
    }

    $scope.setAlignItems = function(position) {
        if (position !== null && display !== undefined) $scope.containerStyle['align-items'] = position;
    }

    $scope.setOrder = function(order) {
        focusCube['order'] = order;
    }

    $scope.setGrow = function(grow) {
        focusCube['flex-grow'] = grow;
    }

    $scope.setShrink = function(shrink) {
        focusCube['flex-shrink'] = shrink;
    }

    $scope.setBasis = function(basis) {
        focusCube['flex-basis'] = basis;
    }

    $scope.setAlignSelf = function(position) {
        focusCube['align-self'] = position;
    }

    $scope.switchTo = function(string) {
        string == 'playground' ? $scope.playgroundOpen = true : $scope.playgroundOpen = false;
    }

    $scope.defaultDisplay(4); //function displays onload default elements 
}]);