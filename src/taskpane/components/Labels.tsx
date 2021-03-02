import * as React from "react";
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Text, TextField, Toggle, DefaultPalette} from 'office-ui-fabric-react';
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

export default class Labels extends React.Component<AppProps> {
  render() {
    return (
      <div className="ms-welcome">
        <section style={{marginTop: 60}}>
          <Header />
          <NavStepBar onClick={() => this.props.onClick('stepthree')} pageTitle="Labels" title=""
            backgroung={DefaultPalette.white}  />


          <Stack tokens={verticalGapStackTokens}>

            <Text variant={'xxLarge'}>Modify Labels</Text>
            <Text variant={'medium'}>Add or edit labels for your table</Text>

            <Toggle label="Add a Table Name above Table Headers" onText="On" offText="Off"  />
            <TextField label="Table Name" />

            <Toggle label="Add a Table Description above Table Headers" onText="On" offText="Off"  />
            <TextField label="Table Description" multiline rows={3} />
          </Stack>
        </section>
      </div>
    );
  }
}
