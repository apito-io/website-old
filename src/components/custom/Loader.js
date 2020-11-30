
import { Spinner } from 'theme-ui';

export function Loader({ pageLoader }) {

    return (
        pageLoader ?
            <div style={{ margin: '10px', height: 'calc(100vh - 84px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner />
            </div>

            :

            <div style={{ margin: '10px' }}>
                <center>
                    <Spinner />
                </center>
            </div>
    )
}