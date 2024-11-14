"use client";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Suspense, useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl'
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";

const Map = ({settings}) => {
	const mapRef = useRef()
	const mapContainerRef = useRef()
	useEffect(() => {
		if(settings && settings.mapbox_api)
		{
			mapboxgl.accessToken = settings.mapbox_api
			mapboxgl.setRTLTextPlugin(
				'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.3.0/mapbox-gl-rtl-text.js',
				null,
				false // Lazy load the plugin
			);
			mapRef.current = new mapboxgl.Map({
				style: 'mapbox://styles/mapbox/dark-v10',
				container: mapContainerRef.current,
				center: [settings.longitude, settings.latitude],
				zoom: 1,
				pitch: 1, // Adjust the pitch to get a horizon perspective
				bearing: -45, // Adjust the bearing for the desired angle
				antialias: true
			});

			mapRef.current.on('load', () => {
				mapRef.current.flyTo({
					center: [settings.longitude, settings.latitude],
					zoom: 15,
					essential: true,
					speed: 1, // Adjust the speed of the animation
					curve: 1, // Adjust the curve of the animation
					pitch: 80, // Adjust the pitch to get a horizon perspective
					antialias: true

				});
				mapRef.current.addSource('mapbox', {
					type: 'vector',
					url: 'mapbox://mapbox.3d-buildings'
				});

				mapRef.current.addLayer({
					'id': '3d-buildings',
					'source': 'mapbox',
					'source-layer': 'building',
					'type': 'fill-extrusion',
					'minzoom': 15,
					'paint': {
						'fill-extrusion-color': '#aaa',
						'fill-extrusion-height': [
							"interpolate",
							["linear"],
							["zoom"],
							15, 0,
							15.05, ["get", "height"]
						],
						'fill-extrusion-base': [
							"interpolate",
							["linear"],
							["zoom"],
							15, 0,
							15.05, ["get", "min_height"]
						],
						'fill-extrusion-opacity': 0.6
					}
				});

				// Add a marker at the center
				new mapboxgl.Marker()
					.setLngLat([settings.longitude, settings.latitude])
					.addTo(mapRef.current);
			});
			return () => {
				mapRef.current.remove()
			}

		}
	}, [settings])

	return (
		<div className={"h-full w-full"}>
			<div className={"absolute top-0 left-0 p-2 z-[2]"}>
				<Button className={"!gap-0"} particular={true} color={ColorTypes.primary} tag={"a"}
						href={"geo:" + settings.latitude + "," + settings.longitude}>
					<span className={"fa fa-location-arrow-up"}/>
				</Button>
			</div>
			<div
				className={"absolute left-0 top-0 w-full h-full bg-slate-800 bg-blend-luminosity radial-mask pointer-events-none z-[1]"}/>
			<div id="map-container" ref={mapContainerRef} className={"h-full w-full"}></div>
		</div>

	)

}
export default Map