import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Toggle = ({ 
  initialState = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleSection = () => setIsOpen(!isOpen);

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <button
        onClick={toggleSection}
        className="w-full flex items-center justify-between p-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls="component-content"
        type="button"
      >
        <h2 className="text-lg font-semibold">What is a Component?</h2>
        {isOpen ? (
          <ChevronUp className="text-gray-600" size={24} aria-hidden="true" />
        ) : (
          <ChevronDown className="text-gray-600" size={24} aria-hidden="true" />
        )}
      </button>

      <div
        id="component-content"
        className={`mt-2 bg-white border rounded-lg p-6 ${!isOpen ? 'hidden' : ''}`}
        role="region"
        aria-labelledby="component-title"
      >
        <ul className="space-y-4 mb-6">
          <li className="text-gray-700">
            Components are reusable elements that we as designers use to create and manage consistent designs.
          </li>
          <li className="text-gray-700">
            Common examples include buttons, checkboxes, and dropdowns.
          </li>
          <li className="text-gray-700">
            Most interfaces are built from a predefined set of components, and they must be accessible!
          </li>
          <li className="text-gray-700">
            To do that, we must understand how components are made accessible.
          </li>
        </ul>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-3">💻 Keyboard Usage:</h3>
            <div className="space-y-2">
              <p><strong>Focus Order:</strong> Navigating to different (parts of) components in a reasonable order with Tab / Shift-Tab</p>
              <p><strong>Actions:</strong> Using keyboard shortcuts (e.g., spacebar, return key, esc)</p>
              <p><strong>Solving Lack of Precision:</strong> The ability to press the left, right, up, and/or down keys to get to the correct position</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3">🐁 Mouse Usage:</h3>
            <div className="space-y-2">
              <p><strong>Double Clicks:</strong> Double-clicking can simplify usage and lower the number of steps needed to continue the user journey</p>
              <p><strong>Right Clicks:</strong> Allows users to be aware of what options are available to continue on their user journey</p>
              <p><strong>Path Gesturing:</strong> Holding down the mouse button to navigate through a bunch of submenus for speed or convenience</p>
            </div>
          </section>

          <p className="text-sm text-gray-500 italic">-CS1300 Accessible Design @ Brown University</p>
        </div>
      </div>
    </div>
  );
};

export default Toggle;