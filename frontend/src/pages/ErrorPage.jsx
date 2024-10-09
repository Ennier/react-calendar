import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred';
    let message = 'Something went wrong.';

    if (error.status === 500) {
        title = 'Oops! Something went wrong';
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found';
        message = error.data.message;
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}