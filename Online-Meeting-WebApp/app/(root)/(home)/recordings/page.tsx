import CallList from '@/components/CallList';

// PreviousPage component that uses the CallList component to display the previous calls of the user
const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Recordings</h1>

      <CallList type="recordings" />
    </section>
  );
};

export default PreviousPage;
