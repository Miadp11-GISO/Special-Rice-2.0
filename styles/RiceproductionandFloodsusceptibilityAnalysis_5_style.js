var size = 0;
var placement = 'point';
function categories_RiceproductionandFloodsusceptibilityAnalysis_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'High Flood Susceptibility':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,13,241,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low Flood Susceptibility':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,246,249,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Moderate Flood Susceptibility':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,234,141,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Not Applicable':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,221,222,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Very High Flood Susceptibility':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(23,19,243,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RiceproductionandFloodsusceptibilityAnalysis_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("FloodSusc");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_RiceproductionandFloodsusceptibilityAnalysis_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
