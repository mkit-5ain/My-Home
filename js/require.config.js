"use strict";
//require
var module = {
    baseUrl: '../js',
    waitSeconds: 200,
    paths: {
        // major library
        'jquery': 'lib/jquery.ui.min',
        //es5 File
        //'es5': 'lib/es5-sham',
        //babel
        'babel': 'lib/babel',
        //ajax
        'ajax':'functions/ajaxFrame',
        'uiAction':'functions/uiFrame',

        //page modules
        'layout':'layout',
        'main':'pages/index'
    },
    //의존성 관리 라이브러리 플러그인 별 의존성 추가
    shim:{
        // 'es5': {
        //     deps: ['babel']
        // },
        'bxSlider':{
              deps: ['jquery']
        },
        'ajax':{
            deps:['jquery']
        },
        'uiAction':{
            deps:['jquery','ajax']
        },
        //pages
        'layout': {
            deps:['uiAction']
        },
        'main':{
            deps:['layout']
        },
        'sub':{
            deps:['layout']
        }
    }
};
//설정 호출 함수
function startJs () {
    requirejs.config(
        module
    );
};
