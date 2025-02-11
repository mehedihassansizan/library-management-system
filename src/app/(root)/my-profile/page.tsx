import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants/idex";

const page = () => {
  return (
    <>
      <form
        className="mb-10"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Sign Out</Button>
      </form>
      <BookList title="Borrowed book" books={sampleBooks} />
    </>
  );
};

export default page;
