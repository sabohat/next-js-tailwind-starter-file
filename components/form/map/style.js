import { RENDER_STATE } from 'react-map-gl-draw'

export function getEditHandleStyle({ state }) {
    switch (state) {
        case RENDER_STATE.SELECTED:
        case RENDER_STATE.HOVERED:
        case RENDER_STATE.UNCOMMITTED:
            return {
                fill: '#fff',
                fillOpacity: 1,
                stroke: '#0E73F6',
                strokeWidth: 2,
                r: 10,
            }

        default:
            return {
                fill: '#fff',
                fillOpacity: 1,
                stroke: '#0E73F6',
                strokeWidth: 1,
                r: 8,
            }
    }
}

export function getFeatureStyle({ state }) {
    switch (state) {
        case RENDER_STATE.SELECTED:
        case RENDER_STATE.HOVERED:
        case RENDER_STATE.UNCOMMITTED:
        case RENDER_STATE.CLOSING:
            return {
                stroke: '#0E73F6',
                strokeWidth: 2,
                fill: '#0E73F6',
                fillOpacity: 0.1,
                strokeDasharray: '0',
            }

        default:
            return {
                stroke: '#0E73F6',
                strokeWidth: 2,
                fill: 'rgb(60, 178, 208)',
                fillOpacity: 0.3,
            }
    }
}
