;function parseFormDataM(obj){function extendObj(src,target){for(var key in target){src[key]=target[key]}}function parsePointProperty(obj,key0,key1){if(!obj[key0]){obj[key0]={}};if(obj[key0][key1]){extendObj(obj[key0][key1],obj[key])}else{obj[key0][key1]=obj[key]}delete obj[key]}for(var key in obj){if(key.indexOf('.')>0){var len=key.split('.').length;if(len>2){var index=key.indexOf('.');var key0=key.slice(0,index),key1=key.slice(index+1);parsePointProperty(obj,key0,key1);if(key1.indexOf('.')>0){parseFormDataM(obj[key0])}}else if(len==2){var keys=key.split('.');key0=keys[0],key1=keys[1];parsePointProperty(obj,key0,key1)}}}return obj}