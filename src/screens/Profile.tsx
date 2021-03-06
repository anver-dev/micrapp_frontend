import React from 'react';
import { View } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { Layout, Text } from 'react-native-rapi-ui';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'MainTabs'>) {
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>Perfil</Text>
			</View>
		</Layout>
	);
}
