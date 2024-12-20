/* 
A card for a user to input their email and subscribe to a newsletter. There should be messaging on the card to encourage the user to subscribe and generate FOMO.

When the user subscribes, the card should show a checkmark icon and a thank you message.
*/

import React, { useState } from 'react';
import { LockSimple, Check } from '@phosphor-icons/react/dist/ssr';
import Button from '@/components/ion/Button';
import Input from '@/components/ion/Input';

const SubscribeToContinueCard = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  return (
    <div
      className="bg-background w-full max-w-md mx-auto p-6 rounded-radius-md shadow-medium"
    >
        {!isSubscribed ? (
          <div
          >
            <div className="flex items-center justify-center mb-4">
              <LockSimple size={48} className="text-primary" weight="fill" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground text-center mb-4">
              Unlock Exclusive Content!
            </h2>
            <p className="text-secondary text-center mb-6">
              Don&apos;t miss out on premium insights, expert analysis, and exclusive offers. Subscribe now and stay ahead of the curve!
            </p>
            <div className="space-y-4">
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="filled"
                color="primary"
                size="md"
                className="w-full"
                onClick={handleSubscribe}
              >
                Subscribe Now
              </Button>
            </div>
            <p className="text-subtle text-sm text-center mt-4">
              Limited time offer: Get 30% off your first month!
            </p>
          </div>
        ) : (
          <div
            key="success"
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Check size={48} className="text-success" weight="fill" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-secondary mb-6">
              You&apos;ve made a great decision. Get ready for exclusive content and amazing offers!
            </p>
            <Button
              variant="outline"
              color="neutral"
              size="md"
              onClick={() => setIsSubscribed(false)}
            >
              Close
            </Button>
          </div>
        )}
    </div>
  );
};

export default SubscribeToContinueCard;
