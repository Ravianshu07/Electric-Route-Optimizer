
const mapAPI = {
    init: () => {
   
    },
    getRoute: (start, end) => {
        
    },
    getChargingStations: (location) => {
    
    }
};


const routePlanner = {
    planRoute: () => {
        const startLocation = document.getElementById('start-location').value;
        const endLocation = document.getElementById('end-location').value;
        const vehicleRange = document.getElementById('vehicle-range').value;

        const routeData = mapAPI.getRoute(startLocation, endLocation);

        if (routeData.distance <= vehicleRange) {
            const routeMap = document.getElementById('route-map');
            routeMap.innerHTML = '';
            const chargingStations = mapAPI.getChargingStations(startLocation)
            const chargingStationList = document.getElementById('charging-station-list');
            chargingStationList.innerHTML = '';
            chargingStations.forEach((station) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${station.name} - ${station.distance} miles away`;
                chargingStationList.appendChild(listItem);
            });
        } else {
            alert('Route exceeds vehicle range!');
        }
    }
};
document.getElementById('plan-route').addEventListener('click', routePlanner.planRoute);