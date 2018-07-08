import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import styles from './index.css';
import ComponentBlogList from './ComponentBlogList';
import ComponentBlogPost from './ComponentBlogPost';
import ComponentForm from './ComponentForm';

export default withRouter(
  class Main extends React.Component {
    state = {
      categoryList: ['travel', 'design', 'tech'],
      blogs: {
        0: {
          id: 0,
          blogTitle: 'QUAS FUGIAT UT PERSPICIATIS VERO PROVIDENT',
          blogContent:
            'Niin paha ne en olet. Vastapaata no ei rantasipit pirullisen. Vie nakyi osa syyni tee yha asiaa. Tai lahtoa vei ylihan elanyt senkin tai. Viina annat onhan no ai oliko. Tee vahinkoa uskotaan kaikille aittanne kas tarkoita ela jai vedappas. Saivat iskien muilla maitoa ne ei et. Ole tuo ero elkaa sataa osaat. Aiti ja asuu lapi en. Saat ai ajaa anna tuli onko et etko. Lahetakaan tukkipuuta sen venhettaan voi nuottikota kun. Rikista ne sanonut vaikkei se ne puhuvat et. Kaikille ja poydalla kurkkuun karahtaa isantain et ei jattaisi. Israelin sen osa vaativat ota kuljemme etteivat. Saada kay papan toi jai nyt usvaa. Se en rikastunut hartaimman rakkautesi ei he. Kesat tuoma harva jaa saa ensin hahah. Tahdot eri sanoit oma oli puista kuului vapaus nyt litraa. Itseanne ja muutamia jattaisi lekkeria maksavan saaristo ei. Saatiin saadaan jos pitkana ela han. Hintaa helgan ela lausui pitava kanssa oli tayden. Pyori hiipi vaari jaa ela mieli lisaa. Vaylalta tai saa menemaan majaansa vei voi. Et revon eivat lapsi en viime. Pyorahti jos nyt rakentaa pohjassa. Kay kysymyksen vie ole osa humalaiset sisimpansa. Korvaan tuo viemaan kannata poytaan kun. Viime jossa helga puhut oli pyori kas nuo. Puhuu yha sinne jaa tuvan eri oliko. Eri kalle veret sanoa ole kun. Ela huomautan mihinkaan oma saaliista. Ehka ukko ela meni han emma saa eli vaan itse. Ole ennen naita elkaa jolle sen. Eri siina tee maata moisi kysyy. En itku ja kuka mene joka elan ai ne. Moottoriin jo nuottikota pirullisen ja enemmankin sylettyvaa. Jos kaksisataa liikkeella jaa tai suurtakaan kas pannaksesi kitupiikki. Taikka omille ne heidat tapana on on ei puista saivat. No on olen koko apua itku. Minakin en paljoko hylkeet se on elaessa kadesta ruskeat. Kodin tulen vetta osaan jos eli tuo sille menee kai. Katsoi monine tyhjan veisin on yhteen nahnyt se et. Ai kummitus jo ne mahdatte pyorahti et. Kun tullut voi tahdon kiilto jos vie. Jonkun niilla paljoa emanta nyt lahtea kun sitten luo tai. Jo kursailla tietenkin juoksette on ne istahtaen. Herranilma liikkeelle huumauksen yha pyyhkimaan sen kuitenkaan sai viinaelake. Yha nauroivat kalpeista oli merirosvo. On te laivanne poskilla tarvitsi saappaat. Anna oli onko saa yha itse. Tai tuli tai osa meri mies vain omat. No se oljytakki ryypannyt tarpeemme. Muka saat joku osta voi tyly tai peri. Nyt sattui lailla soudan sen suusta sumppi hyvina. Purjeeton tee jurottava kun vai pohjineen kulettaja ehtymatta ikkunasta vei. Ai teki he en tuon joka mene ne. Kyhatty pitaako nae oikeaan han ole tai. Olisi suuri et menna on no me nakyi satun. Antamatta ehdittiin satamasta sai jos oma maistuisi menemista eli. Antakaa sen silloin ela tavaraa eli paahasi jai. Toimeen riittaa odottaa me en. Ai lyoda minka sanot suusi en ensin ollut ei. Sala on joku alas se. Pianaikaa on en puuskahti menemista. Herra ja huone ai sinne sanoi milla. Ryhtya yhteen teidan kas vasten tuo sai yha. Kohdallani liikkeella kirmaissut pirullisen ansioitaan miinavenhe ai on ja. Sita tama puna on pain ja kone olen et. Laivat verkot han taisin nyt tuossa ryhtya luo. Menettelet pilkkanaan kysymyksen isa mielellaan harrykoita tarkastaen toi. Puhkesi kelpasi saattoi on he kykenee ne ilmassa. Muilla olivat hatana hiljaa pilaan jos tapana tuo. Opastaa vieraan ainakin ollessa talloin saa sen kai kas. Kas juon yhta luo teki nyt. Lahjaa paivaa nimeni ero jaa saivat kuinka vaikka kun. Lypsaa voi niskaa voivat sarkee myrsky tahdot ota. Ja kirkossa on tyttokin en en keinolla paattaen.',
          categories: ['travel'],
          blogDescription:
            'eum non blanditiis soluta porro quibusdam voluptas…st et voluptatem dignissimos dolor itaque sit nam',
        },
        1: {
          id: 1,
          blogTitle: 'TEMPORIBUS SIT ALIAS DELECTUS ELIGENDI POSSIMUS MAGNI',
          blogContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis. Felis donec et odio pellentesque diam. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Morbi tincidunt augue interdum velit. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Vulputate dignissim suspendisse in est ante in nibh. Volutpat sed cras ornare arcu. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Cum sociis natoque penatibus et. Lorem donec massa sapien faucibus et molestie ac. Urna neque viverra justo nec. Convallis a cras semper auctor neque. Adipiscing elit duis tristique sollicitudin nibh sit. Nisi scelerisque eu ultrices vitae. Interdum posuere lorem ipsum dolor sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Suspendisse interdum consectetur libero id faucibus. Praesent tristique magna sit amet purus. Lectus urna duis convallis convallis. Leo a diam sollicitudin tempor id eu. Duis ultricies lacus sed turpis tincidunt id. Nulla aliquet enim tortor at auctor. Bibendum enim facilisis gravida neque. Scelerisque purus semper eget duis at tellus. Pharetra magna ac placerat vestibulum lectus. Arcu dui vivamus arcu felis bibendum. Sit amet purus gravida quis blandit turpis. Blandit turpis cursus in hac habitasse. Aliquet risus feugiat in ante metus dictum at tempor commodo. Diam in arcu cursus euismod quis viverra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. At imperdiet dui accumsan sit amet nulla. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus vitae aliquet. Donec et odio pellentesque diam volutpat commodo. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Neque viverra justo nec ultrices dui sapien eget mi. Enim sed faucibus turpis in eu mi bibendum neque egestas. Tellus at urna condimentum mattis pellentesque. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Bibendum enim facilisis gravida neque convallis a cras semper. Magnis dis parturient montes nascetur. Feugiat pretium nibh ipsum consequat. Egestas dui id ornare arcu odio ut.',
          categories: ['travel', 'art'],
          blogDescription:
            'quo deleniti praesentium dicta non quod↵aut est mo…lestias et officia quis nihil↵itaque dolorem quia',
        },
        2: {
          id: 2,
          blogTitle: 'AT NAM CONSEQUATUR EA LABORE EA HARUM',
          blogContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit. Id venenatis a condimentum vitae sapien. Duis ut diam quam nulla porttitor massa id neque aliquam. Auctor elit sed vulputate mi sit amet. Tellus mauris a diam maecenas sed enim ut sem viverra. Porta nibh venenatis cras sed felis. Est velit egestas dui id ornare arcu. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Pretium aenean pharetra magna ac placerat vestibulum lectus. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut sem viverra aliquet eget sit amet tellus. Nunc id cursus metus aliquam eleifend mi. Sed arcu non odio euismod lacinia. Eros donec ac odio tempor orci dapibus ultrices. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Eget nulla facilisi etiam dignissim diam quis enim. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Et pharetra pharetra massa massa ultricies mi quis. Interdum posuere lorem ipsum dolor sit amet consectetur. Libero id faucibus nisl tincidunt eget nullam non nisi. Libero volutpat sed cras ornare arcu dui. Enim nec dui nunc mattis enim ut tellus elementum. In ornare quam viverra orci sagittis. Nibh cras pulvinar mattis nunc sed. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Dictum non consectetur a erat nam at lectus urna. Aliquet nibh praesent tristique magna sit amet. Fames ac turpis egestas integer eget aliquet. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.',
          categories: [],
          blogDescription:
            'cupiditate quo est a modi nesciunt soluta↵ipsa vol…nam et distinctio eum↵accusamus ratione error aut',
        },
        3: {
          id: 3,
          blogTitle: 'LABORIOSAM DOLOR VOLUPTATES',
          blogContent:
            'Helgahan kallioon ota kas yha mokottaa ulapalle odottaen. Jaa varmaan rukoili ota hanesta ela pidatte. Tietamaa suinkaan siinakin nae niinkuin porhalsi ero. Tehnytkin hymahtaen olevinasi on et ne tassakaan kulettaja sammuttaa. Ne et paastanyt huomautan ennenkuin ainaisena vanhoiksi taallakin. Papalla puhuvat se ai tavaraa laittaa muualla. Pyydan jos nuo laskea sarkee. Tahtoisin ei ne ai ajattelin rikkaaksi. Osa kai puna saa sita noin. Se paihini on lypsava merella toisten vastaan nousisi. Miellyttaa tarkoittaa jo aallokkoon ai rikastunut. Menen en ettei no moisi. Akkia tulet et saada on te summa onhan ne. Laskee selvaa et ja manner hirtta. Kirmaissut nelikoihin lahetakaan me ei ne maailmassa sittenkuin te. He ne se varmuuden ai viinojaan olevinaan ajattelin taallakin. Loi eri lapsilla pettymys papattaa lasianne tuo olisihan majaansa. Joudeta viemaan oli summaan voi kelluen saatiin pitanyt. Sylelta tuhatta lainata ai ai en. Elamassani liikkeelle ne ai se ja kaupunkiin. Ovat tai saan vie tuli sen. Liikkuvat no maistuisi pohjineen uteliaina me. Onhan pitaa lapsi saa kylla papan sen rupee. Pysahtyen kalliolla purjeeton me parjaavat ai noutamaan ai. Jo kone he olen pera en. Jos hamara taisin taalla merkit tuo helgan sarkee. Iso herrakin yha kerralla moottori saakelin. Ne ei ne et kuolleelta maailmassa tulisikaan moottoriin pannaksesi. Ai kuka et sika emme. Ne otti tuon raha ne naki ilme. Kas nyt paikkaan ela ota toivoisi jattaisi. Rukoiltiin sisimpansa eli tarvitsisi kun nyt tarkoittaa paaltapain nuottikota. Me pain tuli paha ja ei ilme mene ne ehka. Veret te ennen se litra on. Sama yhta toru yha jos koli lie etko osa eiko. Kas oli kadesta ommella jaa jaaneet. Koettelen rihmoihin se ryyppasin kukkasmaa he ja. Jo suurtakaan se huumauksen no he liikkeella. Rukoiltiin en ei on muutettuna me lasketuksi. Se vielakin on en jo poydalta kallelle. Kappaleen et olevinasi et kenenkaan tarvitaan varsinkin. Pannaksesi kaupunkiin kun eri tuo kuitenkaan ole kohdallani pysahtyvan. Antaa hanna ettei vie toi han saa. Kivahti ole jai anastaa yha virkkoi puhuttu kiihtya tarttua ole. Saa torui viron nakee pohja isa jolle sai oli. Kodin tulen vetta osaan jos eli tuo sille menee kai. Katsoi monine tyhjan veisin on yhteen nahnyt se et. Ai kummitus jo ne mahdatte pyorahti et. Kun tullut voi tahdon kiilto jos vie. Jonkun niilla paljoa emanta nyt lahtea kun sitten luo tai. Jo kursailla tietenkin juoksette on ne istahtaen. Me yhta alla koli ei se siis. He vielakaan ai arentinsa et tarvitaan me huumannut. He mies enaa asuu on mika edes et asia no. Uusilla pitaisi ajaapas rapylat lokkeja ai kertoja ja he ei. Voi vie nakkasi minulta alkanut virkkoi saa merilla pannaan voi. Laine hassu et jossa en no kynan tieda se. Se kaupunkiin alullakaan et ruostuneen rantasipit. Rihmoihin sai oljytakki sen jos huomautan torpparit. Sanokaa en ukkikin he ei lypsava. Antia pappi hyvaa ai ja mieli. Pidatte ei te voidaan hymahti he raiskaa. Oljytakki tietenkin jaa han loi varmuuden annettava kay. Jalessaan tarvitaan tuo asiakseen ota kunnialla ole jos. Isa pilkkanaan kuolleelta hyvastinsa ole rikastunut tarkoittaa pyyhkaisee. Eri nyt oli lasketuksi esimerkkia kuolleelta vietavaksi harrykoita onnestanne han. Me ei maailman vahinkoa taakseen tahtoisi ai. Tupa tyly omat lie toi asuu omaa vain. Kaikille pitkalle se en tuulella kalastus et ai tietamaa juotavaa. Se on no on ruostuneen pysahtyvan sinullekin porstuasta. Sen otappas vai tulossa paasisi toi ajautuu tai vedessa lankesi. Tarkoitat arentinsa pienoinen ja ai no kenenkaan. Vaikka laudat oli jai toi mereen. Heinia ruuhen ne soudan pilaan kaikki saassa et. Kirkkoon laivanne tarvitse kun jai yhteensa hajoaisi syotavaa. Nuorta rohtoa tuo taalta kun. Ei jo paaltapain vastapaata rikastunut nykyaikana en no tyttarensa. Helga iso satoi rupee oli siina. Porstuan ja ja kurkkuun ymmartaa en luuletko. On he loytamaan kerrankin ei ei kasvoista olevinasi punastuen tyrskahti. Pyyhkaisee se mielellaan kymmeneksi kulkuneuvo ai on jo. Isa paranevan tee oli ukkovaari kuvitella semmoinen.',
          categories: ['art'],
          blogDescription:
            'doloremque ex facilis sit sint culpa↵soluta assume…ius↵sequi ducimus vel quasi↵veritatis est dolores',
        },
      },
    };

    handleDelete = (id) => {
      const { blogs } = this.state;
      const newBlogList = { ...blogs };
      delete newBlogList[id];
      this.setState({ blogs: newBlogList });
    };

    addNewSubmit = (newBlog) => {
      const { blogs } = this.state;
      const newId = Object.keys(blogs).length + 1;
      this.setState({
        blogs: { ...blogs, [newId]: newBlog },
      });
    };

    render() {
      const { blogs, categoryList } = this.state;
      return (
        <div className={styles.Main}>
          <Switch>
            <Route
              exact
              path="/posts/newpost"
              render={props => (
                <ComponentForm
                  {...props}
                  addNewSubmit={this.addNewSubmit}
                  newId={Object.keys(blogs).length + 1}
                  categoryList={categoryList}
                />
              )}
            />
            <Route
              exact
              path="/posts/:id"
              render={props => (
                <ComponentBlogPost {...props} blogs={blogs} blogPostDelete={this.handleDelete} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => <ComponentBlogList {...props} blogs={blogs} />}
            />
          </Switch>
        </div>
      );
    }
  },
);