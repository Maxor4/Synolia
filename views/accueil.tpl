<div class="container">
    <br />

    <div>
        <p class="greeting-id">The ID is </p>
        <p class="greeting-content">The content is </p>
    </div>

    <h3 align="center">Contacts</h3>

    <div id="album" class="table-responsive" style="margin-top: 5em">
        <table id="dtAlbum" class="table table-striped table-bordered table-sm" width="100%">
            <thead>
                <tr>
                    <th>Prenom</th>
                    <th>Nom</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {foreach $contacts as $c}
                    <tr>
                        <td >{$c['first_name']}</td>
                        <td >{$c['last_name']}</td>
                        <td >{$c['email'][0]['email_address']}</td>
                    </tr>
                {/foreach}
            </tbody>
        </table>
    </div>
    <div id="artiste" class="table-responsive display-none" style="margin-top: 4em; margin-bottom: 3em">
        <table id="dtArtiste" class="table table-striped table-bordered table-sm" width="100%">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Statut</th>
                <th>Date Due</th>
                <th>Contact</th>
            </tr>
            </thead>
            <tbody>
            {foreach $tasks as $t}
                <tr>
                    <td >{$t['name']}</td>
                    <td >{$t['status']}</td>
                    <td >{$t['date_due']}</td>
                    <td >{$t['contact_name']}</td>
                </tr>
            {/foreach}
            </tbody>
        </table>
    </div>

    <input type="button" class="button" id="btnAjax" value="Créer" onclick="callAjax()">
</div>