import Head from "next/head";
import { useState } from "react";
import Filter from "../components/Filter";
import styles from "../styles/Home.module.css";
// const categories = [
//   "All",
//   "Test",
//   "T20I",
//   "T20",
//   "ODI",
//   "List A",
//   "First Class",
// ];
// const season = [
//   "All",
//   "2022/23",
//   "2021/22",
//   "2020/21",
//   "2019/20",
//   "2018/19",
//   "2017/18",
// ];

export default function Home() {
  // const [categoryFilter, setcategoryFilter] = useState("All");
  // const [seasonFilter, setseasonFilter] = useState("All");
  // const [Series, SetSeries] = useState([]);
  // const [loading,setloading] = useState(false)
  // const match = [];
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "bfe31abb3fmsh40d10de405f76cfp1f4f16jsn2665ff83f898",
  //     "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
  //   },
  // };
  // const fetchdata = () => {
  //   fetch("https://cricket-live-data.p.rapidapi.com/series", options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       response.results.map((details) => {
  //         if (categoryFilter == "All" && seasonFilter == "All") {
  //           console.log(details.series);
  //           details.series.map((matches) => {
  //             console.log(matches);
  //             match.push(matches);
  //           });
  //           console.log(match);
  //           SetSeries(match);
  //         } else if (seasonFilter == "All") {
  //           if (details.type == categoryFilter) {
  //             console.log(details.series);
  //             details.series.map((matches) => {
  //               console.log(matches);
  //               match.push(matches);
  //             });
  //             console.log(match);
  //             SetSeries(match);
  //           }
  //         } else if (categoryFilter == "All") {
  //           console.log(details.series);
  //           details.series.map((matches) => {
  //             if (matches.season == seasonFilter) {
  //               console.log(matches);
  //               match.push(matches);
  //             }
  //           });
  //           console.log(match);
  //           SetSeries(match);
  //         } else {
  //           if (details.type == categoryFilter) {
  //             console.log(details.series);
  //             details.series.map((matches) => {
  //               if (matches.season == seasonFilter) {
  //                 console.log(matches);
  //                 match.push(matches);
  //               }
  //             });
  //             console.log(match);
  //             SetSeries(match);
  //           }
  //         }
  //       });
  //     })
  //     .catch((err) => console.error(err));
  //     setloading(true)
  // };
  const [basevalue, setbasevalue] = useState("");
  const [convertvalue, setconvertvalue] = useState("");
  const [value, setvalue] = useState();
  const onChange1 = (e) => {
    setbasevalue(e.target.value);
  };
  const onChange2 = (e) => {
    setconvertvalue(e.target.value);
  };
  const convert = () => {
    fetch("https://open.er-api.com/v6/latest/" + basevalue)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response.rates);
        setvalue(response.rates[convertvalue]);
      })
      .catch((err) => {
        console.log("please enter complete details");
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome Cricket World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="category">
        {categories.map((item, index) => (
          <Filter
            key={index}
            label={item}
            check={item == categoryFilter}
            onClick={() => {
              setcategoryFilter(item);
            }}
          />
        ))}
      </div>
      <div className="season">
        {season.map((item, index) => (
          <Filter
            key={index}
            label={item}
            check={item == seasonFilter}
            onClick={() => {
              setseasonFilter(item);
            }}
          />
        ))}
      </div>
      <button onClick={fetchdata}>fetch</button>
      
      {loading && Series.map((details, index) => {
        return <div key={index}>{details.series_name}</div>;
      })} */}

      {convertvalue && value && (
        <div>
          {" "}
          1 {basevalue} is equal to {value} {convertvalue}{" "}
        </div>
      )}
      <input
        type="text"
        placeholder="enter your base currency"
        onChange={onChange1}
        value={basevalue}
      />
      <input
        type="text"
        placeholder="enter your convert currency"
        onChange={onChange2}
        value={convertvalue}
      />
      <button onClick={convert}>convert</button>
    </div>
  );
}
