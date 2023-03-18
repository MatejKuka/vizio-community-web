import React from 'react';
import Navigation from "@/components/Navigation";
import Landpage from "@/components/Landpage";
import UpcomingEvents from "@/components/UpcomingEvents";
import {Grid, Paper} from "@mui/material";

export default function MainPage() {

    return (
        <div>
            <Navigation/>
            <Landpage/>
            <div className={"mx-auto max-w-[1700px]"}>
                <Grid container spacing={4}>
                    <Grid item lg={6} md={9}>
                        <h2 className={"pl-2 font-bold text-4xl mb-4"}>Upcoming events</h2>
                        <UpcomingEvents/>
                    </Grid>
                    <Grid item lg={6} md={3}>
                        <h2 className={"pl-2 font-bold text-3xl mb-4"}>_</h2>
                        <section className={"bg-white p-8"}>
                            <p className={"mb-4 text-4xl font-bold"}>Základy podnikania <br/> Konzultacia zadarmo One-on-one </p>
                            <button className={"bg-black text-white py-4 px-16 uppercase font-semibold"}>Prihlás sa</button>
                        </section>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

