
import * as React from "react";
import { Button, ButtonType } from "office-ui-fabric-react";
import Header from "./Header";

export interface AppProps {
  onClick: any;
}

export default class Welcome extends React.Component<AppProps> {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="ms-welcome">
        <Header />
        <div className="ms-welcome__header ms-u-fadeIn500">
          <img width="90" height="90" src="assets/logo-hand.png" />
          <h1 className="ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary">Welcome</h1>
        </div>
        <main className="ms-welcome__main">
          <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">Discover what this add-in can do for you today!</h2>
          <ul className="ms-List ms-welcome__features ms-u-slideUpIn10">
            <li className="ms-ListItem" key={'item1'}>
              <i className={`ms-Icon ms-Icon--Design`}></i>
              <span className="ms-font-m ms-fontColor-neutralPrimary">Pick a style to instantly format your data.</span>
            </li>
            <li className="ms-ListItem" key={'item2'}>
              <i className={`ms-Icon ms-Icon--Design`}></i>
              <span className="ms-font-m ms-fontColor-neutralPrimary">Customize your table</span>
            </li>
          </ul>
          <Button
            className="ms-bgColor-themePrimary ms-fontColor-white"
            buttonType={ButtonType.hero}
            onClick={() => this.props.onClick('stepone')}
          >
            Get Started
          </Button>
        </main>
      </div>
    );
  }
}
