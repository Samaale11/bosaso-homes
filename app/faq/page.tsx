export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-manrope text-4xl font-bold text-primary-container mb-10 text-center">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
          <h3 className="font-bold text-primary-container mb-2 text-lg">How do I book a viewing?</h3>
          <p className="text-on-surface-variant font-inter">Please contact us via phone or email using the details in the footer.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
          <h3 className="font-bold text-primary-container mb-2 text-lg">Are these properties verified?</h3>
          <p className="text-on-surface-variant font-inter">Yes, exclusively matchmaking. Every property listed is physically verified by our team.</p>
        </div>
      </div>
    </div>
  );
}