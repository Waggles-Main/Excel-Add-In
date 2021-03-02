
import * as React from "react";
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Text, DefaultPalette, ChoiceGroup, IChoiceGroupOption} from 'office-ui-fabric-react';
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

const options: IChoiceGroupOption[] = [
  { key: 'Compact', text: 'Compact' },
  { key: 'Normal', text: 'Normal' },
  { key: 'Loose', text: 'Loose' },
];


export default class Spacing extends React.Component<AppProps> {
  render() {
    return (
      <div className="ms-welcome">
        <section style={{marginTop: 60}}>
          <Header />
          <NavStepBar onClick={() => this.props.onClick('stepthree')} pageTitle="Spacing" title=""
            backgroung={DefaultPalette.white}  />


          <Stack tokens={verticalGapStackTokens}>

            <Text variant={'xxLarge'}>Edit Spacing</Text>
            <Text variant={'medium'}>Modify cell spacing between text.</Text>

            <Text variant={'large'}>Cell Spacing</Text>

            <ChoiceGroup defaultSelectedKey="Normal" options={options} label="Primary" />
          </Stack>
        </section>
      </div>
    );
  }
}
