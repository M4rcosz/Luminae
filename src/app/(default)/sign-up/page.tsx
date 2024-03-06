import { SignUp } from "@clerk/nextjs";

interface SignUpPageProps {
    searchParams: {
        redirectUrl: string;
    }
}

const SignUpPage = ({ searchParams: { redirectUrl } }: SignUpPageProps) => {
    return (
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <SignUp signInUrl="/sign-in" redirectUrl={redirectUrl} />
                </div>
            </div>
        </section>
    );
}

export default SignUpPage