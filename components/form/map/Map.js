/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef, useEffect } from 'react'
import ReactMapGL, { NavigationControl } from 'react-map-gl'
import {
    Editor,
    EditingMode,
    DrawPolygonMode,
    DrawPointMode,
} from 'react-map-gl-draw'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { json } from './laleh'
import { getFeatureStyle, getEditHandleStyle } from './style'

// mapboxgl.setRTLTextPlugin(
//   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js"
// );

const navStyle = {
    position: 'absolute',
    padding: '10px',
    top: '50%',
    right: 20,
}

const Map = ({ onChange }) => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '500px',
        latitude: 41.2995,
        longitude: 69.2401,
        zoom: 14,
        bearing: 0,
        pitch: 0,
    })
    const { features } = json
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState()
    const [editFeatures, setEditFeatures] = useState([...features])
    const [mode, setMode] = useState(new EditingMode())
    const [mapStyle] = useState('mapbox://styles/mapbox/outdoors-v11')
    const mapRef = useRef()
    const editorRef = useRef()

    useEffect(() => {}, [])
    const onUpdate = (payload) => {
        onChange(payload)
        if (payload.editType === 'addFeature') {
            setMode(new EditingMode())
            setEditFeatures(payload.data)
        }
    }

    const onDelete = () => {
        if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
            editorRef.current.deleteFeatures(selectedFeatureIndex)
        }
    }

    const onSelect = (selected) => {
        setSelectedFeatureIndex(selected.selectedFeatureIndex)
    }

    const renderDrawTools = () => (
        <div className="mapboxgl-ctrl-top-right">
            <div className="mapboxgl-ctrl-group mapboxgl-ctrl">
                <button
                    type="button"
                    className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
                    title="Polygon tool (p)"
                    onClick={() => setMode(new DrawPolygonMode())}
                />
                <button
                    type="button"
                    className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_point"
                    title="Point tool"
                    onClick={() => setMode(new DrawPointMode())}
                />
                <button
                    type="button"
                    className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
                    title="delete"
                    onClick={onDelete}
                />
            </div>
        </div>
    )

    return (
        <ReactMapGL
            {...viewport}
            ref={mapRef}
            mapStyle={mapStyle}
            mapboxApiAccessToken="pk.eyJ1IjoiaXJjb3dvcmtlciIsImEiOiJja2JlcWZ3OGMwbzV0MzBwOGhzaTF6b3g0In0.B6trBLncQIKqLF46c90BLw"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            <div className="nav" style={navStyle}>
                <NavigationControl
                    showCompass={false}
                    onViewportChange={(nextViewport) =>
                        setViewport(nextViewport)
                    }
                />
            </div>
            <Editor
                style={{ width: '100%', height: '100%' }}
                ref={editorRef}
                clickRadius={12}
                mode={mode}
                onSelect={onSelect}
                onUpdate={onUpdate}
                feaures={editFeatures}
                editHandleShape="circle"
                featureStyle={getFeatureStyle}
                editHandleStyle={getEditHandleStyle}
            />
            {renderDrawTools()}
        </ReactMapGL>
    )
}

export default Map
