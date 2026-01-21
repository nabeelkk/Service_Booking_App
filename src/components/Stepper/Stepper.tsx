import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper = ({ currentStep, steps }: StepperProps) => {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-600 to-primary-700"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div
              key={stepNumber}
              className="flex flex-col items-center flex-1"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white'
                    : isCurrent
                    ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-white ring-4 ring-accent-200'
                    : 'bg-white text-gray-400 border-2 border-gray-300'
                }`}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <FaCheck />
                  </motion.div>
                ) : (
                  stepNumber
                )}
              </motion.div>
              
              <motion.p
                initial={false}
                animate={{
                  color: isCurrent || isCompleted ? '#4f46e5' : '#9ca3af',
                  fontWeight: isCurrent ? 600 : 500,
                }}
                className="mt-3 text-xs sm:text-sm text-center max-w-[80px] sm:max-w-none"
              >
                {step}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;