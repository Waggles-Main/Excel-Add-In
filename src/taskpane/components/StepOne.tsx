
import * as React from "react";
import { Stack, IStackTokens, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Text, Checkbox, Button, TextField, DefaultPalette} from 'office-ui-fabric-react';
import Header from "./Header";
import NavStepBar from './NavStepBar';


export interface AppProps {
  onClick: any;
  setTableRange: any;
  tableRange: any;
}
export interface AppState {
  range: any;
}

// Styles definition
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.neutralLight,
    padding: 10,
    justifyContent: "flex-end",
  }
}

export default class StepOne extends React.Component<AppProps, AppState> {
  constructor(props){
    super(props)
    this.state = {
      range: 'testinga',
    }
  }
  autoSelect = async () => {
    try {
      await Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        // Read the range address
        range.load("address");
        await context.sync();
        this.props.setTableRange(range.address.toString());
        
      });
    } catch (error) {
      this.setState({range: 'error'})
      console.error(error);
    }    
  };

  render() {
    return (
      <div className="ms-welcome">
        <section style={{marginTop: 60}}>
          <Header />
          <NavStepBar 
            onClick={() => this.props.onClick('welcome')} 
            title="Step 1 of 3"
            background={DefaultPalette.neutralLight} />

          <Stack tokens={verticalGapStackTokens}>

            <img style={{margin: 50}} width="200" height="auto" src="assets/image.png"  />
            <Text variant={'xLarge'}>Select your data {this.state.range}</Text>
            <TextField 
              label="Pick a range, table, or pivot table to enhance."
              placeholder="A1:C3..."
              value={this.props.tableRange}
              onChange={(_event, newValue) => this.props.setTableRange(newValue)}
              />
            <Checkbox label="My Table has Headers"  defaultChecked />
            <Stack.Item align="baseline">

              <Button onClick={this.autoSelect}>
                  Auto Select
              </Button>
            </Stack.Item>
          </Stack>
          <Stack verticalAlign="end" grow={1} horizontalAlign="end" styles={stackStyles}>

          <Stack.Item grow={1} align="end">
              <Button className="ms-bgColor-themePrimary ms-fontColor-white"
                  onClick={() => this.props.onClick('steptwo')}>
                  Next
              </Button>
          </Stack.Item>
          </Stack>
        </section>
      </div>
    );
  }
}
