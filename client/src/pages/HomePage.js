import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";

import { GET_USER_MATCHES } from "../utils/queries";

const HomePage = () => {
    const userId = Auth.getUserId()
    const { loading, data, error } = useQuery(GET_USER_MATCHES, { variables: { user: userId } });  

    return (
        <>
            <h1>HomePage</h1>
            {loading && <div>don't look at me yet</div>}

            {!loading && !error && <div>
                {data.getUserMatches.map(match => <p>{`${match.name} ${match.score}`}</p>)}   
            </div>}

            {/**add survey link and email addressed for users */}
            {!loading && !!error && <a href="/survey">go do the survey dummy</a>}
        </>
    )
}

export default HomePage;