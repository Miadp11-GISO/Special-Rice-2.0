var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Waterways_2 = new ol.format.GeoJSON();
var features_Waterways_2 = format_Waterways_2.readFeatures(json_Waterways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_2.addFeatures(features_Waterways_2);
var lyr_Waterways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_2, 
                style: style_Waterways_2,
                popuplayertitle: 'Waterways',
                interactive: false,
                title: '<img src="styles/legend/Waterways_2.png" /> Waterways'
            });
var format_MunicipalityofAsuncion_3 = new ol.format.GeoJSON();
var features_MunicipalityofAsuncion_3 = format_MunicipalityofAsuncion_3.readFeatures(json_MunicipalityofAsuncion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalityofAsuncion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityofAsuncion_3.addFeatures(features_MunicipalityofAsuncion_3);
var lyr_MunicipalityofAsuncion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityofAsuncion_3, 
                style: style_MunicipalityofAsuncion_3,
                popuplayertitle: 'Municipality of Asuncion',
                interactive: true,
                title: '<img src="styles/legend/MunicipalityofAsuncion_3.png" /> Municipality of Asuncion'
            });
var format_BarangayBoundary_4 = new ol.format.GeoJSON();
var features_BarangayBoundary_4 = format_BarangayBoundary_4.readFeatures(json_BarangayBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarangayBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayBoundary_4.addFeatures(features_BarangayBoundary_4);
var lyr_BarangayBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayBoundary_4, 
                style: style_BarangayBoundary_4,
                popuplayertitle: 'Barangay Boundary',
                interactive: true,
                title: '<img src="styles/legend/BarangayBoundary_4.png" /> Barangay Boundary'
            });
var format_RiceproductionandFloodsusceptibilityAnalysis_5 = new ol.format.GeoJSON();
var features_RiceproductionandFloodsusceptibilityAnalysis_5 = format_RiceproductionandFloodsusceptibilityAnalysis_5.readFeatures(json_RiceproductionandFloodsusceptibilityAnalysis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiceproductionandFloodsusceptibilityAnalysis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceproductionandFloodsusceptibilityAnalysis_5.addFeatures(features_RiceproductionandFloodsusceptibilityAnalysis_5);
var lyr_RiceproductionandFloodsusceptibilityAnalysis_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiceproductionandFloodsusceptibilityAnalysis_5, 
                style: style_RiceproductionandFloodsusceptibilityAnalysis_5,
                popuplayertitle: 'Rice production and Flood susceptibility Analysis',
                interactive: true,
    title: 'Rice production and Flood susceptibility Analysis<br />\
    <img src="styles/legend/RiceproductionandFloodsusceptibilityAnalysis_5_0.png" /> High Flood Susceptibility<br />\
    <img src="styles/legend/RiceproductionandFloodsusceptibilityAnalysis_5_1.png" /> Low Flood Susceptibility<br />\
    <img src="styles/legend/RiceproductionandFloodsusceptibilityAnalysis_5_2.png" /> Moderate Flood Susceptibility<br />\
    <img src="styles/legend/RiceproductionandFloodsusceptibilityAnalysis_5_3.png" /> Not Applicable<br />\
    <img src="styles/legend/RiceproductionandFloodsusceptibilityAnalysis_5_4.png" /> Very High Flood Susceptibility<br />' });
var format_Riceproductionarea_6 = new ol.format.GeoJSON();
var features_Riceproductionarea_6 = format_Riceproductionarea_6.readFeatures(json_Riceproductionarea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riceproductionarea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riceproductionarea_6.addFeatures(features_Riceproductionarea_6);
var lyr_Riceproductionarea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riceproductionarea_6, 
                style: style_Riceproductionarea_6,
                popuplayertitle: 'Rice production area',
                interactive: false,
                title: '<img src="styles/legend/Riceproductionarea_6.png" /> Rice production area'
            });

lyr_EsriDarkGray_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Waterways_2.setVisible(true);lyr_MunicipalityofAsuncion_3.setVisible(false);lyr_BarangayBoundary_4.setVisible(false);lyr_RiceproductionandFloodsusceptibilityAnalysis_5.setVisible(false);lyr_Riceproductionarea_6.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_GoogleSatelliteHybrid_1,lyr_Waterways_2,lyr_MunicipalityofAsuncion_3,lyr_BarangayBoundary_4,lyr_RiceproductionandFloodsusceptibilityAnalysis_5,lyr_Riceproductionarea_6];
lyr_Waterways_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_MunicipalityofAsuncion_3.set('fieldAliases', {'ID': 'ID', 'Municipali': 'Municipali', 'Area_has': 'Area_has', });
lyr_BarangayBoundary_4.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'Yield': 'Yield', });
lyr_RiceproductionandFloodsusceptibilityAnalysis_5.set('fieldAliases', {'FloodSusc': 'FloodSusc', 'SUSC': 'SUSC', 'BARANGAY': 'BARANGAY', 'Area': 'Area', });
lyr_Riceproductionarea_6.set('fieldAliases', {'DN': 'DN', });
lyr_Waterways_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_MunicipalityofAsuncion_3.set('fieldImages', {'ID': 'TextEdit', 'Municipali': 'TextEdit', 'Area_has': 'TextEdit', });
lyr_BarangayBoundary_4.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'Yield': 'TextEdit', });
lyr_RiceproductionandFloodsusceptibilityAnalysis_5.set('fieldImages', {'FloodSusc': 'TextEdit', 'SUSC': 'TextEdit', 'BARANGAY': 'TextEdit', 'Area': 'TextEdit', });
lyr_Riceproductionarea_6.set('fieldImages', {'DN': 'Range', });
lyr_Waterways_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'width': 'no label', });
lyr_MunicipalityofAsuncion_3.set('fieldLabels', {'ID': 'hidden field', 'Municipali': 'inline label - visible with data', 'Area_has': 'inline label - visible with data', });
lyr_BarangayBoundary_4.set('fieldLabels', {'ID': 'header label - always visible', 'BARANGAY': 'inline label - visible with data', 'Yield': 'inline label - visible with data', });
lyr_RiceproductionandFloodsusceptibilityAnalysis_5.set('fieldLabels', {'FloodSusc': 'inline label - visible with data', 'SUSC': 'hidden field', 'BARANGAY': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Riceproductionarea_6.set('fieldLabels', {'DN': 'no label', });
lyr_Riceproductionarea_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});