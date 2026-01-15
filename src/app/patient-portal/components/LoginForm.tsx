'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface LoginFormProps {
  onLogin: (credentials: { email: string; password: string; twoFactor?: string }) => void;
  isLoading: boolean;
}

const LoginForm = ({ onLogin, isLoading }: LoginFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    twoFactor: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [requiresTwoFactor, setRequiresTwoFactor] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-white rounded-lg shadow-brand p-8 w-full max-w-md">
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4"></div>
            <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
          </div>
          <div className="space-y-4">
            <div className="h-12 bg-muted rounded"></div>
            <div className="h-12 bg-muted rounded"></div>
            <div className="h-12 bg-primary/20 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const mockCredentials = {
    email: 'patient@novacare.com',
    password: 'SecurePass123',
    twoFactor: '123456'
  };

  return (
    <div className="bg-card rounded-lg shadow-healing p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="ShieldCheckIcon" size={32} className="text-primary-foreground" />
        </div>
        <h1 className="font-headline text-2xl font-semibold text-foreground mb-2">
          Secure Patient Login
        </h1>
        <p className="font-body text-muted-foreground">
          Access your medical records and appointments
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-border rounded-lg focus-healing font-body"
              placeholder="Enter your email"
              required
            />
            <Icon
              name="EnvelopeIcon"
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block font-body font-medium text-foreground mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-12 border border-border rounded-lg focus-healing font-body"
              placeholder="Enter your password"
              required
            />
            <Icon
              name="LockClosedIcon"
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-micro"
            >
              <Icon name={showPassword ? "EyeSlashIcon" : "EyeIcon"} size={20} />
            </button>
          </div>
        </div>

        {requiresTwoFactor && (
          <div>
            <label htmlFor="twoFactor" className="block font-body font-medium text-foreground mb-2">
              Two-Factor Authentication Code
            </label>
            <div className="relative">
              <input
                id="twoFactor"
                type="text"
                value={formData.twoFactor}
                onChange={(e) => handleInputChange('twoFactor', e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-border rounded-lg focus-healing font-body"
                placeholder="Enter 6-digit code"
                maxLength={6}
              />
              <Icon
                name="DevicePhoneMobileIcon"
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Check your authenticator app or SMS for the code
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
            />
            <span className="ml-2 font-body text-sm text-foreground">Remember me</span>
          </label>
          <button
            type="button"
            className="font-body text-sm text-primary hover:text-primary/80 transition-micro"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-cta font-semibold hover:bg-primary/90 transition-healing disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
              Signing In...
            </>
          ) : (
            <>
              <Icon name="ArrowRightOnRectangleIcon" size={20} />
              Sign In Securely
            </>
          )}
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setRequiresTwoFactor(!requiresTwoFactor)}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-micro"
          >
            {requiresTwoFactor ? 'Use standard login' : 'Enable two-factor authentication'}
          </button>
        </div>
      </form>

      <div className="mt-8 p-4 bg-bg-light rounded-lg">
        <h2 className="font-headline font-semibold text-sm text-foreground mb-2">Demo Credentials:</h2>
        <div className="font-body text-sm text-muted-foreground space-y-1">
          <p>Email: {mockCredentials.email}</p>
          <p>Password: {mockCredentials.password}</p>
          <p>2FA Code: {mockCredentials.twoFactor}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;