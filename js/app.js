$(function()
{
	/**
     * Fonction qui retourne la factorielle d'un nombre en argument.
     * 
     * @param {Integer} n
     * 
     * @return {Integer}
     */
    Math.fact = function(n)
    {
       	if (n <= 0)
    	{
            return 1;
        }

        return n * Math.fact(n - 1);
    };

    /**
     * Retourne un nombre aléatoire suivant une loi normale.
     * 
     * @return {Float}
     */
    Math.normalRandom = function()
    {
    	return Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random());
    };

    /**
     * Retourne un nombre aléatoire suivant une loi de poisson.
     * 
     * @param {Float} lambda
     * 
     * @return {Float}
     */
    Math.poissonRandom = function(lambda)
    {
    	let s = lambda;
    	let r = -1;

    	do
    	{
    	    r++;
    	    s += Math.log(1 - Math.random());
    	} while (s >= 0);

    	return r;
    };

    /**
     * Retourne un nombre aléatoire suivant une loi exponentielle.
     * 
     * @param {Float} lambda
     * 
     * @return {Float}
     */
    Math.expRandom = function(lambda)
	{
    	return -Math.log(1 - Math.random()) / lambda;
    };

    /**
     * Retourne un nombre aléatoire suivant une loi de Weibull.
     * 
     * @param {Float} lambda
     * @param {Float} k
     * 
     * @return {Float}
     */
    Math.weibullRandom = function(lambda, k)
    {
        return Math.pow(-Math.log(1 - Math.random()), 1 / k) / lambda;
    };
});