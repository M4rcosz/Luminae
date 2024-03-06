import { SignIn } from "@clerk/nextjs";

interface SignInPageProps {
    searchParams: {
        redirectUrl: string;
    }
}

const SignInPage = ({ searchParams: { redirectUrl } }: SignInPageProps) => {
    return (
        <section className="py-14">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <SignIn signUpUrl="/sign-up" redirectUrl={redirectUrl} />
                </div>
            </div>
        </section>
    );
}

export default SignInPage