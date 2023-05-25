import React, {useState} from "react";
import axios from "axios";
import styles from './Home.module.css';
import Beers from "../../components/beers/Beers";

function Home() {
    const [beerData, setBeerData] = useState({});
    const [inputValueDish, setInputValueDish] = useState({});
    const [inputValueBeer, setInputValueBeer] = useState({});
    const [beerOne, setBeerOne] = useState(false);
    const [beerTwo, setBeerTwo] = useState(false);
    const [beerThree, setBeerThree] = useState(false);
    const [search1, setSearch1] = useState(false);
    const [search2, setSearch2] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        fetchBeerWithDish();
        setSearch1(true);
        setSearch2(false);

    }

    function handleSubmitt(e) {
        e.preventDefault();
        fetchBeerWithBeer()
        setSearch1(false);
        setSearch2(true);
    }

    async function fetchBeerWithDish() {
        try {
            const result = await axios.get(`https://api.punkapi.com/v2/beers?food=${inputValueDish}`);
            console.log(result)
            setBeerData(result.data)
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchBeerWithBeer() {
        try {
            const result = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${inputValueBeer}`);
            setBeerData(result.data)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div className={styles.home}>
                <div className={styles.right}>

                    <div className={styles.inputContainer}>
                        <div>
                            <form action=""
                                  onSubmit={handleSubmit}
                                  className={styles.homeForm}
                            >
                                <input
                                    className={styles.inputFields}
                                    type="text"
                                    placeholder="search with main ingredients"
                                    onChange={e => setInputValueDish(e.target.value)}
                                />
                                <button type="submit"
                                        className={styles.homeButtons}> Fetch beers!
                                </button>
                            </form>
                        </div>
                        <div>
                            <form action=""
                                  onSubmit={handleSubmitt}
                                  onChange={e => setInputValueDish("")}
                                  className={styles.homeForm}
                            >
                                <input
                                    className={styles.inputFields}
                                    type="text"
                                    placeholder="search with kind of beer"
                                    onChange={e => setInputValueBeer(e.target.value)}
                                />
                                <button type="submit"
                                        className={styles.homeButtons}> Fetch beers!
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className={styles.explain}>

                        {Object.keys(beerData).length > 0 &&
                            <>
                                {beerOne &&
                                    <>
                                        <h2>{beerData[0].name}</h2>
                                        <p>{beerData[0].description}</p>
                                    </>}
                                {beerTwo &&
                                    <>
                                        <h2>{beerData[1].name}</h2>
                                        <p>{beerData[1].description}</p>
                                    </>}
                                {beerThree &&
                                    <>
                                        <h2>{beerData[2].name}</h2>
                                        <p>{beerData[2].description}</p>
                                    </>
                                }
                            </>
                        }

                        {(beerOne) === false && (beerTwo) === false && (beerThree) === false &&
                            <p>Search for a beer and click on it for more information</p>
                        }

                        {search1 === true && Object.keys(beerData).length < 1 && Object.keys(inputValueDish).length > 0 &&
                            <>
                                <p>OW NO :( </p>
                                <p>Couldn't find any thing with your input. Try something like fish, tomato or
                                    beef</p>
                            </>
                        }
                        {Object.keys(beerData).length < 1 && Object.keys(inputValueBeer).length > 0 &&
                            <>
                                <p>OW NO :( </p>
                                <p>Couldn't find any thing with your input. Try something like IPA, Ale or
                                    Lager </p>
                            </>
                        }

                    </div>

                </div>

                {Object.keys(beerData).length > 0 &&
                    <>
                        <div className={styles.beerdiv}>

                            <div onClick={() => {
                                setBeerOne(!beerOne);
                                setBeerTwo(false)
                                setBeerThree(false)
                            }}>
                                <Beers
                                    title={beerData[0].name}
                                    list1={beerData[0].food_pairing[0]}
                                    list2={beerData[0].food_pairing[1]}
                                    list3={beerData[0].food_pairing[2]}
                                    img={beerData[0].image_url}
                                    alc={beerData[0].abv}
                                />
                            </div>

                            {Object.keys(beerData).length > 1 && beerData != undefined &&
                                <div onClick={() => {
                                    setBeerOne(false);
                                    setBeerTwo(!beerTwo)
                                    setBeerThree(false)
                                }}>
                                    <Beers
                                        title={beerData[1].name}
                                        list1={beerData[1].food_pairing[0]}
                                        list2={beerData[1].food_pairing[1]}
                                        list3={beerData[1].food_pairing[2]}
                                        img={beerData[1].image_url}
                                        alc={beerData[1].abv}
                                    />
                                </div>
                            }
                            {Object.keys(beerData).length > 2 && beerData != undefined &&

                                <div onClick={() => {
                                    setBeerOne(false);
                                    setBeerTwo(false)
                                    setBeerThree(!beerThree)
                                }}>
                                    <Beers
                                        title={beerData[2].name}
                                        list1={beerData[2].food_pairing[0]}
                                        list2={beerData[2].food_pairing[1]}
                                        list3={beerData[2].food_pairing[2]}
                                        img={beerData[2].image_url}
                                        alc={beerData[2].abv}
                                    />
                                </div>
                            }

                        </div>
                    </>
                }
            </div>

            {Object.keys(beerData).length > 0 &&
                <>
                    <img src={beerData[0].image_url} className={styles.beerImage1} alt="beer image 1"/>
                </>
            }
            {Object.keys(beerData).length === 0 &&
                <>
                    <img src="https://images.punkapi.com/v2/10.png" className={styles.beerImage1} alt="beer image 1"/>
                </>
            }
        </>
    )
}

export default Home;