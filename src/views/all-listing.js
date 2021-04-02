import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllAds } from '../api/data.js';
import { carTemplate } from './common/car.js';



const allListingsTemplate = (cars) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        
        ${cars.length == 0 
        ? html`<p class="no-cars">No cars in database.</p>` 
        : cars.map(carTemplate)}`;





export async function catalogPage(ctx) {
    const cars = await getAllAds();
    ctx.render(allListingsTemplate(cars));
}