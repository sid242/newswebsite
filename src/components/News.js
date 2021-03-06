import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

  articles = [
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Chhattisgarh Chief Minister's Father Sent To Jail Over Brahmin Remark - NDTV",
      description:
        "Chhattisgarh Chief Minister Bhupesh Baghel's father Nand Kumar Baghel was arrested and sent to 15 days in custody by a court in Raipur for allegedly making derogatory remarks against the Brahmin community.",
      url: "https://www.ndtv.com/india-news/chhattisgarh-chief-minister-bhupesh-baghels-father-nand-kumar-baghel-arrested-for-remarks-against-brahmins-2532740",
      urlToImage:
        "https://c.ndtvimg.com/2021-09/jud47q68_bhupesh-baghel-father-_625x300_07_September_21.jpg",
      publishedAt: "2021-09-07T12:04:00Z",
      content:
        "Chhattisgarh Chief Minister Bhupesh Baghel's father Nand Kumar Baghel has been sent to 15-day custody.\r\nNew Delhi: Chhattisgarh Chief Minister Bhupesh Baghel's father Nand Kumar Baghel was arrested a… [+2197 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Valkerie Baynes",
      title:
        "Jos Buttler, Jack Leach recalled to England squad for fifth Test vs India - ESPNcricinfo",
      description:
        "Buttler back from paternity leave, Wood in line to bolster weary seam stocks",
      url: "https://www.espncricinfo.com/story/england-vs-india-2021-jos-buttler-jack-leach-recalled-to-england-squad-for-fifth-test-1276695",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/325200/325240.jpg",
      publishedAt: "2021-09-07T11:37:06Z",
      content:
        "NewsButtler back from paternity leave, Wood in line to bolster weary seam stocks",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: "Victorious Taliban Gloat Over Ruins Of CIA's Afghan Base - NDTV",
      description:
        "After America's longest war, Taliban commander Mullah Hasnain contemplates all that is left of what was part of the last CIA base -- demolished buildings, destroyed vehicles and piles of ammunition.",
      url: "https://www.ndtv.com/world-news/victorious-taliban-gloat-over-ruins-of-cias-afghan-base-2532828",
      urlToImage:
        "https://c.ndtvimg.com/2021-09/9fl6hvq_cia-afghan-base650_625x300_07_September_21.jpg",
      publishedAt: "2021-09-07T11:33:42Z",
      content:
        "The complex was once one of the most secure sites in Afghanistan.\r\nDeh Sabz District: After America's longest war, Taliban commander Mullah Hasnain contemplates all that is left of what was part of t… [+4005 chars]",
    },
    {
      source: {
        id: null,
        name: "Abplive.com",
      },
      author: "ABP News Bureau",
      title:
        "‘Countdown: Inspiration4 Mission To Space’: Netflix Series On 1st SpaceX All-Civilian Spaceflight | Check Dates - ABP Live",
      description:
        "'Inspiration4' has been slated to launch on September 15, 2021, with Hayley Arceneaux, Christopher Sembroski, and Sian Proctor on the flight.",
      url: "https://news.abplive.com/entertainment/web-series/countdown-inspiration4-mission-to-space-netflix-series-on-elon-musk-1st-spacex-all-civilian-spaceflight-check-dates-1480792",
      urlToImage:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2021/09/07/c16d416c2b57c82446a9a87894d64baf_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      publishedAt: "2021-09-07T11:21:21Z",
      content:
        "New Delhi: Famous entrepreneur Elon Musk’s SpaceX planned a spaceflight ‘Inspiration4’ for four people, which will be the first human spaceflight to orbit Earth with exclusively private citizens on b… [+1395 chars]",
    },
    {
      source: {
        id: null,
        name: "91mobiles",
      },
      author: null,
      title:
        "Infinix Hot 11S set to launch in India on September 17th with 50MP triple camera, MediaTek Helio G88 SoC - 91mobiles",
      description:
        "Infinix Hot 11S price in India and full specifications will be revealed next week on September 17th. Here's what we know about the phone so far.",
      url: "https://www.91mobiles.com/hub/infinix-hot-11s-india-launch-date-september-17/",
      urlToImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2021/09/infinix-hot-11s-featured.jpg",
      publishedAt: "2021-09-07T11:17:25Z",
      content:
        "Infinix Hot 11S price in India and full specifications will be revealed next week on September 17th. Here's what we know about the phone so far.\r\nInfinix Hot 11S is launching in India next week on Se… [+1902 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Sports to bring more ad revenues to TV, thanks to T20 World Cup, Tokyo Olympics - Moneycontrol.com",
      description:
        "Sports used to contribute around 15 percent to the TV ad revenue, now it will be in the 18-20 percent range. The 14th edition of IPL alone will add around Rs 2,500 crore. The T20 World Cup will mint close to Rs 1,200 crore and Olympics in the range of Rs 300-…",
      url: "https://www.moneycontrol.com/news/trends/sports-trends/sports-to-bring-more-ad-revenues-to-tv-thanks-to-t20-world-cup-tokyo-olympics-7439671.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/04/IPL-trophy-iplt20-696x435.jpg",
      publishedAt: "2021-09-07T10:48:38Z",
      content:
        "It looks like 2021 will turn out to be a good year for sports, especially from an advertising revenue perspective.\r\nSports, which contributes in the 10-15 percent range, will see its share going up, … [+2985 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'On "OG" Mammootty\'s 70th Birthday, Son Dulquer Salmaan Writes: "May You Always Age In Reverse" - NDTV Movies',
      description:
        '"We are the luckiest and most fortunate to be your family," wrote Dulquer Salmaan',
      url: "https://www.ndtv.com/entertainment/on-og-mammoottys-70th-birthday-son-dulquer-salmaan-writes-may-you-always-age-in-reverse-2532735",
      urlToImage:
        "https://c.ndtvimg.com/2021-09/m5p11fjo_dulquer-salmaan-_625x300_07_September_21.jpg",
      publishedAt: "2021-09-07T10:37:16Z",
      content:
        'Dulquer Salmaan shared this photo. (Image courtesy: dqsalmaan )\r\nHighlights\r\n<ul><li>"Ever so grateful and ever so blessed," wrote Dulquer Salmaan \r\n</li><li>"I love you infinity Pa," he added \r\n</li… [+1923 chars]',
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "'India is moving again': Ola cab business crosses pre-Covid levels, says Bhavish Aggarwal - Mint",
      description:
        "The OLA CEO said 10 million people used Ola for the first time ever in FY21",
      url: "https://www.livemint.com/news/india/india-is-moving-again-ola-gmv-crosses-pre-covid-levels-says-bhavish-aggarwal-11631010378386.html",
      urlToImage:
        "https://images.livemint.com/img/2021/09/07/600x338/de526134-fc4a-11eb-9351-32be236c0b91_1631010944150_1631010967383.jpg",
      publishedAt: "2021-09-07T10:32:47Z",
      content:
        "OLA CEO Bhavish Aggarwal on Tuesday said the recovery from second wave of Covid was three times faster as company's business crossed pre-pandemic levels last week. \r\nIndia is moving again! Our @olaca… [+2498 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "PTI",
      title:
        "Protesting airstrikes in Panjshir, people throng Kabul streets chanting 'death to Pakistan' - Times of India",
      description:
        'South Asia News: Chanting "death to Pakistan", Afghan protesters, including women, took to the streets of Kabul on Tuesday, as they claimed that Pakistani jets conduct',
      url: "https://timesofindia.indiatimes.com/world/south-asia/protesting-airstrikes-in-panjshir-people-throng-kabul-streets-chanting-death-to-pakistan/articleshow/86005258.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86005248,width-1070,height-580,imgsize-48330,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-09-07T10:31:00Z",
      content:
        "About 600 Taliban fighters killed in Afghanistan's Panjshir, claim resistance forcesA day after Taliban and the Resistance were caught up in a fierce fight in Afghanistan's Panjshir, claiming control… [+176 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "hindustantimes.com",
      title:
        "Covid-19 third wave is already here, people must celebrate Ganesh Chaturthi at home: Mumbai mayor - Hindustan Times",
      description:
        "Kishori Pednekar was referring to Nagpur guardian minister Nitin Raut remarks that the city is already been hit by the third wave of Covid-19 amid rising cases in Maharashtra as well as Mumbai.  | Mumbai news",
      url: "https://www.hindustantimes.com/cities/mumbai-news/covid19-third-wave-is-already-here-people-must-be-alert-says-mumbai-mayor-101631009733795.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2021/09/07/1600x900/Covid-19_third_wave_Mumbai_Mahrashtra_1631010111149_1631010111313.jpg",
      publishedAt: "2021-09-07T10:28:19Z",
      content:
        "The third wave of Covid-19 is already here, Mumbai mayor Kishori Pednekar said on Tuesday as she cautioned people against celebrating Ganesh Chaturthi outside their homes amid the rising cases of Cov… [+2066 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Express Web Desk",
      title:
        "Karnal Kisan Mahapanchayat Live Updates: Farmers gather in Karnal for mahapanchayat, officials hold talks with their leaders - The Indian Express",
      description:
        "Senior leaders of the Samyukt Kisan Morcha (SKM), including Rakesh Tikait, Balbir Singh Rajewal, Darshan Pal, Yogendra Yadav and Gurnam Singh Chaduni, have arrived for the mahapanchayat demanding action against the police lathicharge on farmers on August 28.",
      url: "https://indianexpress.com/article/india/karnal-kisan-mahapanchayat-live-updates-7493891/",
      urlToImage: "https://images.indianexpress.com/2021/09/pic-17.jpg",
      publishedAt: "2021-09-07T10:05:54Z",
      content:
        "Kisan Mahapanchayat in Karnal Today Live Coverage: Talks between farmers and government officials in Karnal have been inconclusive and farmer leaders have said that they will now decide on the future… [+1459 chars]",
    },
    {
      source: {
        id: null,
        name: "Free Press Journal",
      },
      author: "IANS",
      title:
        "Smartphone brand itel unveils 'affordable' Vision 2S with big display, 5000 mAh battery - Free Press Journal",
      description:
        "Smartphone brand itel unveils 'affordable' Vision 2S with big display, 5000 mAh battery",
      url: "https://www.freepressjournal.in/business/smartphone-brand-itel-unveils-affordable-vision-2s-with-big-display-5000mah-battery",
      urlToImage:
        "https://images.assettype.com/freepressjournal/2021-09/9ea22b65-43a8-43de-a1d0-74d0338dc526/itel_smartphones.jpg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2021-09-07T09:56:09Z",
      content:
        "After the huge success of its premium-affordable Vision series in India, India's most trusted smartphone brand itel on Tuesday launched an innovative next-generation smartphone -- Vision 2S -- at an … [+3548 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Nutritional Deficiency Anaemia: Prevention, diagnosis and treatment? - Times of India",
      description:
        "Anaemia is the condition when there is a decreased level of haemoglobin (Hb) in the red blood cells (RBC), which fu",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/diet/nutritional-deficiency-anaemia-prevention-diagnosis-and-treatment/articleshow/86004367.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86004358,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-23942/86004358.jpg",
      publishedAt: "2021-09-07T09:45:00Z",
      content:
        "Anaemia is the condition when there is a decreased level of haemoglobin (Hb) in the red blood cells (RBC), which function by carrying oxygen to various tissues and organs. While anaemia can occur due… [+5638 chars]",
    },
    {
      source: {
        id: null,
        name: "Jagran Josh",
      },
      author: null,
      title:
        "NASA detects 1,000 Near-Earth Asteroid – All you need to know - Jagran Josh",
      description:
        "The Jet Propulsion Laboratory of NASA has marked the 1,000th Near-Earth Asteroid named 2021 PJ1as it passed Earth. Read all you need to know.",
      url: "https://www.jagranjosh.com/current-affairs/nasa-detects-1000-nearearth-asteroid-all-you-need-to-know-1631007800-1",
      urlToImage:
        "https://img.jagranjosh.com/images/2021/September/792021/Asteroid_2016_AJ193_.jpeg",
      publishedAt: "2021-09-07T09:43:00Z",
      content:
        "1000th Near-Earth Asteroid: The Jet Propulsion Laboratory (JPL) of the National Aeronautics and Space Administration (NASA) on August 14, 2021, marked the 1,000th Near-Earth Asteroid named 2021 PJ1as… [+2498 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "TOI Poll: Fans vote for Shardul Thakur as man of the match for India's 4th Test against England - Times of India",
      description:
        "Cricket News: India produced a bowling masterclass on a flat deck at The Oval to beat England by 157 runs in the fourth Test. Shardul Thakur hit a half-century in b",
      url: "https://timesofindia.indiatimes.com/sports/cricket/india-in-england/toi-poll-fans-vote-for-shardul-thakur-as-man-of-the-match-for-indias-4th-test-against-england/articleshow/86004207.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86004180,width-1070,height-580,imgsize-35844,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-09-07T09:38:00Z",
      content:
        "TOI Poll: Fans vote for Shardul Thakur as man of the match for India's 4th Test against England",
    },
    {
      source: {
        id: null,
        name: "Technosports.co.in",
      },
      author: null,
      title:
        "Mercedes-Benz reveals mind-control technology in its Vision AVTR concept car - TechnoSports",
      description:
        "Self-driving technology has been gaining much attraction lately; in 2021, we cannot even dismiss the idea of flying cars, as we are closer than ever to witnessing them turn into a reality. Mercedes-Benz is the latest automobile icon to introduce a mind-boggli…",
      url: "https://technosports.co.in/2021/09/07/mercedes-benz-reveals-mind-control-technology-in-its-vision-avtr-concept-car/",
      urlToImage:
        "https://technosports.co.in/wp-content/uploads/2021/09/f-12.jpg",
      publishedAt: "2021-09-07T09:19:39Z",
      content:
        "Self-driving technology has been gaining much attraction lately; in 2021, we cannot even dismiss the idea of flying cars, as we are closer than ever to witnessing them turn into a reality. \r\nMercedes… [+2769 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Tasneem Akolawala",
      title:
        "Acer Swift X Laptop With AMD Ryzen 5000 Series Processor Launched in India - Gadgets 360",
      description:
        "Acer Swift X laptop has launched in India. It is a lightweight laptop weighing just 1.39kg, and its just 17.9mm thin. It comes with the latest AMD Ryzen 5000 series processor and Nvidia GeForce RTX 3050 Ti graphics card.",
      url: "https://gadgets.ndtv.com/laptops/news/acer-swift-x-laptop-price-in-india-rs-84999-launch-sale-date-september-7-specifications-features-amd-ryzen-500-cpu-2532620",
      urlToImage:
        "https://i.gadgets360cdn.com/large/acer_swift_x_1631005729010.jpg",
      publishedAt: "2021-09-07T09:14:15Z",
      content:
        "Acer Swift X laptop was launched in the Indian market on Tuesday, September 7. It comes with the latest AMD Ryzen 5000 series processor and Nvidia GeForce RTX 3050 Ti graphics card. The laptop has an… [+2014 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: null,
      title:
        "Vodafone Idea flags industry's unsustainable financial duress; hopes for govt support - Moneycontrol",
      description:
        'In the Chairman\'s letter to shareholders, Himanshu Kapania cited persistent challenges in the operating environment, amid "unsustainable pricing" and "hyper-competition" during FY21. Kapania expressed hope that government will support efforts to generate reas…',
      url: "https://www.moneycontrol.com/news/business/vodafone-idea-flags-industrys-unsustainable-financial-duress-hopes-for-govt-support-7440011.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/04/Vodafone-Idea-shutterstock-770x433.jpg",
      publishedAt: "2021-09-07T09:07:16Z",
      content:
        'Ailing telecom operator Vodafone Idea has flagged the industry\'s "unsustainable financial duress" in its latest annual report and hoped that the government would provide the necessary support to addr… [+3150 chars]',
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Heavy to very heavy rainfall likely in these states till 11 Sep. IMD's latest forecast here - Mint",
      description:
        "Isolated extremely heavy rainfall is likely over central Maharashtra and Konkan on 7-8; Gujarat state on 8-9 Sep",
      url: "https://www.livemint.com/news/india/heavy-to-very-heavy-rainfall-likely-in-these-states-till-11-sep-imd-s-latest-forecast-here-11631004205542.html",
      urlToImage:
        "https://images.livemint.com/img/2021/09/07/600x338/ANI-20210906061-0_1631005029874_1631005040428.jpg",
      publishedAt: "2021-09-07T08:58:06Z",
      content:
        "The India Meteorological Department (IMD) has predicted heavy to very heavy rainfall in many states till 11th September. In its latest updates, the IMD said that enhanced rainfall activity was very l… [+3559 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "PTI",
      title:
        "Cairn accepts $1bn refund offer, to drop cases against India within days: CEO Simon Thomson - Times of India",
      description:
        "India Business News: NEW DELHI: UK-based Cairn Energy PLC on Tuesday said it will drop litigations to seize Indian properties in countries ranging from France to the US, w.",
      url: "https://timesofindia.indiatimes.com/business/india-business/cairn-accepts-1bn-refund-offer-to-drop-cases-against-india-within-days-ceo/articleshow/86003398.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86003395,width-1070,height-580,imgsize-9814,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-09-07T08:53:00Z",
      content:
        "Cairn accepts $1bn refund offer, to drop cases against India within days: CEO Simon Thomson",
    },
  ];



  static defaultProps = {
    contry: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hello I am Constructor from news component");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: true,
      page: 1, 
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`
  }

  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount(){
    console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0dc908ac3f3b4479b833478826b06426&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    this.updateNews()
  }

  handlePrevClick = async() => {
    console.log("prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0dc908ac3f3b4479b833478826b06426&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // })

    this.setState({
      page: this.state.page -1
    })
    this.updateNews()
  }
  
  handleNextClick = async() => {
    console.log("next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0dc908ac3f3b4479b833478826b06426&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true})
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // console.log(parsedData);
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false
      // }
      // )

      
    this.setState({
      page: this.state.page +1
    })
    this.updateNews()

    }
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page +1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults,
      // loading: false
    })
  }

  render() {
      console.log("sd");
    return (
      <div className="container my-3 text-center">
        <h1 style={{margin:"35px 0px"}}>Breaking News - Top Headlines from {this.capitalizeFirstLetter(this.props.category)} category </h1>
        {this.state.loading && <Spinner/>}
       
        {/* <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div> */}
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
<InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" setProgress={this.setProgress} apiKey={this.apiKey} key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 

        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
