<div class="container">
    <br />

    <h3 align="center">ALBUMS</h3>

    <div id="album" class="table-responsive" style="margin-top: 5em">
        <table id="dtAlbum" class="table table-striped table-bordered table-sm" width="100%">
            <thead>
                <tr>
                    <th>Album</th>
                    <th>Artiste</th>
                    <th>Année</th>
                    <th>Prix</th>
                    <th>Genre</th>
                    <th>Pays</th>
                </tr>
            </thead>
            <tbody>
                {foreach $albums as $a}
                    <tr>
                        <td >{$a->getAlbum()}</td>
                        <td >{$a->getArtist()}</td>
                        <td >{$a->getYear()}</td>
                        <td >{$a->getPrice()}</td>
                        <td >{$a->getGenre()}</td>
                        <td >{$a->getNation()}</td>
                    </tr>
                {/foreach}
            </tbody>
        </table>
    </div>
    <div id="artiste" class="table-responsive display-none" style="margin-top: 4em; margin-bottom: 3em">
        <table id="dtArtiste" class="table table-striped table-bordered table-sm" width="100%">
            <thead>
            <tr>
                <th>Artiste</th>
                <th>Pays</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            {foreach $artists as $ar}
                <tr>
                    <td >{$ar['n.artNom']}</td>
                    <td >{$ar['n.libNat']}</td>
                    <td >{$ar['n.libGenre']}</td>
                </tr>
            {/foreach}
            </tbody>
        </table>
    </div>
</div>

{*<div id="avertTableStockAll" class="containerVoirStock">
    <div class="entete clearfix">
        <div class="image">Album</div>
        <div class="manufacturer">Artiste</div>
        <div class="reference">Année</div>
    </div>
    <div class="corps clearfix">
        {foreach $albums as $a}
            <div class="tableStockLocatif clearfix"
                 onClick="affichageDetails({$a->getId()})"
            >
                <div class="reference">
                    ghjbnj
                </div>
                <div class="manufacturer">hbjhbhj</div>
                <div class="name">bhjh</div>
                <div class="stock">

                </div>
                <div id="ongletAlbum{$a->getId()} hide">
                    <div class="enteteNumLot clearfix">
                        <div class="reference">&nbsp;</div>
                        <div class="manufacturer">&nbsp;</div>
                        <div class="numlot">
                            Numéro de lot
                        </div>
                        <div class="peremption">
                            Périmé le
                        </div>
                        <div class="stock" >
                            Stock
                        </div>
                        <div class="details"></div>
                    </div>
                    <div class="containerListeNumlot"></div>
                </div>
            </div>
        {/foreach}
    </div>
</div>*}