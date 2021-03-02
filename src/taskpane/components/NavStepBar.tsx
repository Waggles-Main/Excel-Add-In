import * as React from "react";
import { Stack, IStackTokens, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
// import { DefaultPalette , mergeStyles} from 'office-ui-fabric-react/lib/Styling';
import { mergeStyles} from 'office-ui-fabric-react/lib/Styling';
import { Text, FontIcon} from 'office-ui-fabric-react';
const verticalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};
const iconClass = mergeStyles({
  height: 20,
  width: 20,
  margin: '5px 5px',
  fontSize: 20
});

export default function NavStepBar(props) {
  // Styles definition
  const stackStyles: IStackStyles = {
    root: {
      background: props.background,
    },
  };

     return (
        <Stack horizontal  horizontalAlign="space-between"  styles={stackStyles} tokens={verticalGapStackTokens}>
          <Stack.Item >
            <Text variant="large"  onClick={props.onClick}>
              <FontIcon iconName="Back" className={iconClass} /> {props.pageTitle}
            </Text>
          </Stack.Item>
          <Stack.Item ><span>{props.title }</span></Stack.Item>
        </Stack>
    );
}
