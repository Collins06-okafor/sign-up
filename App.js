import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

export default function App() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '', // New state for confirm password
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleSignUp = () => {
    const { email, password, confirmPassword } = form;

    // Check password length
    if (password.length < 8) {
      Alert.alert('Password must be at least 8 characters');
    }
    // Check if password and confirm password match
    else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
    } else {
      Alert.alert('Successfully signed up!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign up</Text>
          <Text style={styles.subtitle}>Enter details</Text>
        </View>

        <View style={styles.form}>
          {/* Email Input */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={styles.inputControl}
              placeholder="name@example.com"
              placeholderTextColor="#6b7288"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>

          {/* Password Input */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={!isPasswordVisible}
                maxLength={20}
                style={styles.inputControl}
                placeholder="**********"
                placeholderTextColor="#6b7288"
                value={form.password}
                onChangeText={(password) => setForm({ ...form, password })}
              />
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Icon
                  name={isPasswordVisible ? 'eye-slash' : 'eye'} // Use eye icon and toggle based on state
                  size={20}
                  color="#075eec"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={!isConfirmPasswordVisible}
                maxLength={20}
                style={styles.inputControl}
                placeholder="**********"
                placeholderTextColor="#6b7288"
                value={form.confirmPassword}
                onChangeText={(confirmPassword) => setForm({ ...form, confirmPassword })}
              />
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              >
                <Icon
                  name={isConfirmPasswordVisible ? 'eye-slash' : 'eye'} // Use eye icon and toggle based on state
                  size={20}
                  color="#075eec"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.formAction}>
          <TouchableOpacity onPress={handleSignUp}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Create account</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 'auto' }}
            onPress={() => {
              // Handle sign-up navigation
            }}
          >
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f4',
  },
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    width: '99%',
    height: 44,
    backgroundColor: '#efff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
    justifyContent: 'space-between',
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
    letterSpacing: 0.1,
    marginTop: 40,
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Positioning relative for the toggle button
  },
  toggleButton: {
    position: 'absolute',
    right: 16, // Position to the right of the textbox
    padding: 8,
  },
});
