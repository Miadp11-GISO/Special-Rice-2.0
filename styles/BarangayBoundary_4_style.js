var size = 0;
var placement = 'point';

var style_BarangayBoundary_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Century Gothic\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#150f0f";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("BARANGAY") !== null) {
        labelText = String(feature.get("BARANGAY"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.011764705882352941)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
