
import * as React from "react";
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Text, DefaultPalette, Dropdown, IDropdownOption, Slider} from 'office-ui-fabric-react';
import Header from "./Header";
import NavStepBar from "./NavStepBar";

export interface AppProps {
  onClick: any;
}

// Styles definition
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 15,
  padding: 10,
};

const options: IDropdownOption[] = [
  { key: 'Arial', text: 'Arial' },
  { key: 'Arial Italic', text: 'Arial Italic' },
  { key: 'Arial Bold', text: 'Arial Bold' },
];

export default class Typography extends React.Component<AppProps> {
  render() {
    return (
      <div className="ms-welcome">
        <section style={{marginTop: 60}}>
          <Header />
          <NavStepBar onClick={() => this.props.onClick('stepthree')} pageTitle="Typography" title=""
            backgroung={DefaultPalette.white}  />


          <Stack tokens={verticalGapStackTokens}>

            <Text variant={'xxLarge'}>Edit Fonts</Text>
            <Text variant={'small'}>Modify the fonts used in your table</Text>

            <Text variant={'large'}>Main Fonts</Text>
            <Text variant={'medium'}>Fonts used in theme</Text>
            <Dropdown
              placeholder="Select list item"
              label="Primary Font"
              options={options}
            />

            <Dropdown
              placeholder="Select list item"
              label="Secondary Font"
              options={options}
            />

            <Text variant={'large'}>Available Options</Text>
            <Text variant={'small'}>Fine tune specific fonts for the table style</Text>

            <Text variant={'medium'}>Title 1</Text>
            <Dropdown
              placeholder="Select list item"
              label="The largest text on screen, reserved for short, important text or numerals"
              options={options}
            />
            <Slider label="Font Size" max={72} />


            <Text variant={'medium'}>Title 2</Text>
            <Dropdown
              placeholder="Select list item"
              options={options}
            />
            <Slider label="Font Size" max={72} />


          </Stack>
        </section>
      </div>
    );
  }
}
