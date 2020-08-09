import * as React from "react";
import Screen from "../components/Screen";
import { Text } from "@ui-kitten/components";

export default function PreferencesScreen({ navigation }) {
	return (
		<Screen title="Preferences">
			<Text>
				Changes here won't have an effect on the current search, but will be used as your defaults
				for future searches.
			</Text>
		</Screen>
	);
}
