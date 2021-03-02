import * as React from "react";
import { Stack, IStackTokens, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import Header from "./Header";
import { Text, Separator, DefaultPalette, Button, themeRulesStandardCreator} from 'office-ui-fabric-react';
import NavStepBar from './NavStepBar';

const data = require('../../../custom.json');
export interface AppProps {
  onClick: any;
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
  }
}

const setStyles = async function setStyle(color){
  try {
    await Excel.run(async context => {
      const range = context.workbook.getSelectedRange();
      range.load("address");
      range.format.fill.color = color;
      await context.sync();
      console.log(`The range address was ${range.address}.`);
    });
  } catch (error) {
    console.error(error);
  };
};

async function testSet() {
  await Excel.run(async (context) => {
    const range = context.workbook.getSelectedRange();
    range.format.fill.color = "orange";
    range.load("address");

    await context.sync();

    console.log(`The range address was "${range.address}".`);
  });
}

export default class StepTwo extends React.Component<AppProps> {
  
  render() {
    return (
      
      <section style={{marginTop: 60}}>
        <Header />
        <NavStepBar onClick={() => this.props.onClick('stepone')} title="Step 2 of 3"
            background={DefaultPalette.neutralLight}  />

        <Stack tokens={verticalGapStackTokens}>

          <img style={{margin: 50}} width="200" height="auto" src="assets/image.png"  />
          <Text variant={'xLarge'}>Pick a Style</Text>
          <Text variant={'large'}>Pick a style to instantly format your data. </Text>
          <Separator></Separator>
          {data.style_options.map((item) => {
            return <img onClick={() =>setStyles(item.color)}
               style={{margin: 30}} width="270" height="auto" key={item.name} src={item.image_path}  />
          })}

        </Stack>
        <Stack verticalAlign="end" grow horizontalAlign="end" styles={stackStyles}>

          <Stack.Item align="end">
              <Button className="ms-bgColor-themePrimary ms-fontColor-white"
                  onClick={() => this.props.onClick('stepthree')}>
                  Next
              </Button>

              <Button className="ms-bgColor-themePrimary ms-fontColor-white"
                  onClick={() => testSet(item.style)}>
                  Test
              </Button>
          </Stack.Item>
          </Stack>
      </section>
    );
  }
}
