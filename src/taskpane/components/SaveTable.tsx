import * as React from "react";
import { Checkbox, CompoundButton, DefaultButton, Dialog, DialogFooter, DialogType, IStackTokens, PrimaryButton, Stack, TextField} from 'office-ui-fabric-react';


// type: DialogType.largeHeader,
const dialogContentProps = {
  title: 'Save Table Style',
};

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};
export interface AppState {
  hideDialog: boolean;
}
export interface AppProps {
}

export default class SaveTable extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      hideDialog: true,
    }
  }
  toggleHideDialog() {
    this.setState({hideDialog: !this.state.hideDialog});
  }

  render() {    
    return (
      <div>
        <Stack>
          <Stack.Item align="center">

          <CompoundButton primary secondaryText="Sub Text" onClick={() => this.toggleHideDialog()} >
            Save Table Style
          </CompoundButton>
          </Stack.Item>
        </Stack>

      <Dialog
        hidden={this.state.hideDialog}
        onDismiss={() => this.toggleHideDialog()}
        dialogContentProps={dialogContentProps}
      >
        <Stack  tokens={verticalGapStackTokens}>
          <TextField label="Table Style Name" placeholder="Table Name" />
          <Checkbox label="Set as default table style" />
          <Checkbox label="Replace default cell styles" />
        </Stack>

        <DialogFooter>
          <PrimaryButton onClick={() => this.toggleHideDialog()} text="Cancel" />
          <DefaultButton onClick={() => this.toggleHideDialog()} text="Save" />
        </DialogFooter>
      </Dialog>
      </div>
    );
  }
}
