import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred';
    let message = 'Something went wrong.';

    if (error.status === 500) {
        title = 'Oops! Something went wrong';
        message = JSON.stringify(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found';
        message = 'Could not find resource.';
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