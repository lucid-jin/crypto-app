import {Route, Switch} from "react-router-dom";
import {Cryptocurrencies, CryptoDetails, Exchanges, Homepage, News} from "../components";

export enum Paths {
  HomePage = '/',
  Exchanges = '/exchanges',
  Cryptocurrencies = '/cryptocurrencies',
  CryptoDetails = '/crypto/:coinId', // /:id 를 붙여줘야한다
  News = '/news'
}

export const makeLinkTo = (path: Paths, routeParam?: string) => {
  let isDetails = false;

  switch (path) {
    case Paths.CryptoDetails: {
      if (!routeParam) throw Error('id를 입력하세요');
      isDetails = true;
      break;
    }
  }
  if (isDetails){
    const formatPath = path.split('/').splice(1,1).join()
    return `/${formatPath}/${routeParam}`;
  }
  
  return isDetails ? path.split('/').join() : path;
};

type Props = {};

const routes = (props: Props) => {
  return (
    <div className="routes">
      <Switch>
        <Route exact path={Paths.HomePage}><Homepage/></Route>
        <Route exact path={Paths.Exchanges}><Exchanges/></Route>
        <Route exact path={Paths.Cryptocurrencies}><Cryptocurrencies/></Route>
        <Route exact path={Paths.CryptoDetails}><CryptoDetails/></Route>
        <Route exact path={Paths.News}><News/></Route>
      </Switch>
    </div>
  );
};

export default routes
