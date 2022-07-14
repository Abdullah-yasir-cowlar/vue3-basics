app.component('review-list', {
    /* html */
    template:`
        <div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(rev, index) in this.reviews" :key="index">{{ rev.name }} gave this {{ rev.rating }} star rating</li>
            </ul>
        </div>
    `,
    props: {
        reviews: {
            type: Array,
            required: true
        }
    }
})